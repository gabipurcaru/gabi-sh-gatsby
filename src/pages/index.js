import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <p className="leading-relaxed text-2xl md:px-16 -mb-8 text-center">
        I&apos;m a passionate software engineer that takes pride in his work.
        Currently, I&apos;m fighting fake accounts and platform abuse on
        Facebook and Instagram. Here&apos;s a bit about me.
      </p>

      <Experience />
      <Projects />
    </Layout>
  );
}

function Projects() {
  return (
    <section className="text-gray-700 body-font -mt-16">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap my-4 -mx-8">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Mule Uploader
              </h1>
              <p className="leading-relaxed mb-3">
                HTML5 resumable uploader for Amazon S3. It slices the files in
                JS, and then it uploads them piece by piece. At the end, S3
                recreates the file from the pieces.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Dedo.io
              </h1>
              <p className="leading-relaxed mb-3">
                Fancy calculator with unit and currency support. A mix between
                spreadsheets, notepad and a bit of Wolfram Alpha.
                <br />
                Implemented with React, Material Design and CodeMirror. It
                features a mini programming language implemented in JavaScript
                with JISON.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Acceleratul.ro
              </h1>
              <p className="leading-relaxed mb-3">
                Search platform for the Romanian railways. Built with React +
                ES6, Firebase, Material Design and ServiceWorker.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8">
          <div className="py-8 flex flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                Facebook London
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                March 2017 &ndash; today
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Software Engineer
              </h2>
              <p className="leading-relaxed">
                I&apos;ve revolved around the human review, security, and
                integrity/platform abuse spaces. Along with excellent
                colleagues, I&apos;ve created a SQL-like DSL for online/offline
                security event analysis, aligned Instagram&apos;s account-level
                abuse detection with the Facebook equivalent. I&apos;ve led my
                organisation in implementing emerging data use regulations on a
                tight deadline, and helped define the future paradigm of human
                review.
              </p>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                Facebook London
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                September &ndash; November 2016
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Software Engineer Intern
              </h2>
              <p className="leading-relaxed">
                I&apos;ve helped improve Facebook&apos;s machine learning
                dataset labeling platform.
              </p>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                Facebook London
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                September &ndash; November 2015
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Software Engineer Intern
              </h2>
              <p className="leading-relaxed"></p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900">
                CATEGORY
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexPage;
