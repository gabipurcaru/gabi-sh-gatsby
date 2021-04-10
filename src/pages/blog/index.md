---
path: train-delays
date: 2020-06-01T19:01:03.818Z
title: "Weekend project: scraping train delays"
published: true
---
As I'm trying to keep my skills sharp, I've started toying around with this idea: the Romanian rail network is extremely inefficient, and seems to be massively delayed whenever it's hot, it rains, it snows, or during weekdays that end with "y".

If I wanted to get a deeper understanding of the delays, I'm going to need data. There's no historical dump of delays, only realtime, through a janky UI. So my idea was to build a scraper for said janky UI and build myself a nice historical dataset of delays.

## The product

The end result of this excercise is a JSON dump of delays - per train, per segment, per day. This would be interesting to myself, other geeks curious about delay patterns, etc.

## The infrastructure

The first iteration of this was a phantom.js script running with forever.js and writing to a local Sqlite DB, all packaged in a single Scaleway low end VPS. I chose the tools because they were easy to set up and I was familiar with them.

That proved not to work that great, because the local DB filled up quickly and the whole thing just died - and I didn't find out until much much later. Rookie mistake, but I suppose not terrible for a quick and dirty weekend project. Let's start again, from first principles this time:

1. it needs to be **reliable**: I don't want to spend an hour a week keeping this janky script alive, so I need to be confident it will be doing its thing for months with minimum supervision
2. it needs to be **easy to set up**: this is not the kind of project I want to spend a full week on
3. it needs to be **cheap**: I don't want to spend more than $10/month on a pet project

Starting from principle 2., I've decided to set this up on AWS because I'm familiar with it. After a bit of googling, I've arrived at this strategy:

* **EC2** for the scraper - the lowest end box I can find. This ends up being the bulk of the cost for the project. The setup here is pretty much the same as the original one, with the difference that it's now sending JSON to Kinesis
* **Kinesis streams** to send the data from the EC2 box. This has some nice features: first, you can send the data to be stored as Apache Parquet in S3 (a columnar data store easy to use with Presto and the like - pretty much equivalent to plain JSON for my purposes here, but easier to work with). Second, you can see the realtime traffic going through the stream, and put an alarm on it
* **S3** for holding the data. Parquet ends up being super cheap. This is also convenient for sharing with others as needed
* **CloudWatch alarms** for reliability. This is a simple alarm on the stream throughput - when it goes down, I get an email. Simple as that
* **Athena** to query the data. Behind the scenes, this is Presto querying S3 directly. Works like a charm for the use case, and it incredibly fast for my purposes

## The result

This has been running for ~8 months now, and it's been working great, with minimal set up time. The whole setup is:

* reliable - the only times it was down were when the actual underlying website was down, which is not under my control. This ends up being a bit noisy as I do get an alarm once or twice a month, and I'm worried at some point I'll become used to it and ignore a real issue. I'll need to tweak the alarm a bit
* fairly cheap - so far I've accumulated 1.2GB of data in S3, which costs about 3¢/month to store. Adding traffic and the EC2 box, the whole thing ends up costing ~$12/month. A bit above the budget unfortunately, but I do have some opportunities to improve - see below
* easy to work with - Athena allows me to query the data without any other preprocessing step, since it works with the Parquet format stored by Kinesis. Based on this, I can run further pipelines, dashboards, etc. So far I haven't done much here, but I have a lot of possibilities

In terms of the data gathered, I didn't go too deep yet, but my impression is that the rail companies need to stop being so optimistic with their schedules if they're going to be late almost every time.

## Future plans

From the data perspective, there's plenty of work to do: first off, I want to eventually do an exploratory notebook digging into the results. Second, I want to share the data with whomever might be interested - NGOs? Journalists? Not sure yet.

From the infrastructure point of view, there are some further steps I can take:

* cost - $9/month for a t2.micro is a bit of a rip off. It would probably be better to run something like a DEV1-S on Scaleway for €3 instead
* reliability - the alarm needs some tweaking, it's crying wolf too often
* reliability - the whole infrastructure was set up by using clicky buttons in the AWS interface. Something like Terraform or other infrastructure-as-code solution might give me more control over it and future-proof it from myself for when I won't remember the different pieces and how they interact with each other

## The point of all this

It was pretty fun, and I hope I'll get some useful data out of it. The absolute best scenario would be something like a news article showing e.g. how the rail infrastructure keeps shrinking and getting worse over time, with explicit data to back it up. We'll see where this leads.