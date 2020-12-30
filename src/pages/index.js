import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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
  const projects = [{
    title: "Mule Uploader",
    description: `HTML5 resumable uploader for Amazon S3. It slices the files in
      JS, and then it uploads them piece by piece. At the end, S3
      recreates the file from the pieces.`,
    link: "https://www.google.com/",
  }, {
    title: "Dedo.io",
    description: (
      <>
        Fancy calculator with unit and currency support. A mix between
        spreadsheets, notepad and a bit of Wolfram Alpha.
        <br />
        Implemented with React, Material Design and CodeMirror. It
        features a mini programming language implemented in JavaScript
        with JISON.
      </>
    ),
    link: "https://www.google.com/",
  }, {
    title: "Acceleratul.ro",
    description: `Search platform for the Romanian railways. Built with React +
      ES6, Firebase, Material Design and ServiceWorker.`,
    link: "https://www.google.com/",
  }];
  return (
    <section className="text-gray-7o00 body-font -mt-16">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap my-4 -mx-8">
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Project({ title, description, link }) {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {title}
        </h1>
        <p className="leading-relaxed mb-3">
          {description}
        </p>
        <Link to={link} className="text-green-500 inline-flex items-center">
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
        </Link>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

function Experience() {
  const positions = [{
    company: "Facebook London",
    dates: "March 2017 – today",
    role: "Software Engineer",
    description: `I've revolved around the human review, security, and
      integrity/platform abuse spaces. Along with excellent
      colleagues, I've created a SQL-like DSL for online/offline
      security event analysis, aligned Instagram's account-level
      abuse detection with the Facebook equivalent. I've led my
      organisation in implementing emerging data use regulations on a
      tight deadline, and helped define the future paradigm of human
      review.`
  },
  {
    company: "Facebook London",
    dates: "September – November 2016",
    role: "Software Engineer Intern",
    description: `I've helped improve Facebook's machine learning dataset labeling platform.`,
  },
  {
    company: "Facebook London",
    dates: "September – November 2015",
    role: "Software Engineer Intern",
    description: ``,
  },
  ];

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8">
          {positions.map((position, i) => (
            <ExperienceRow key={i} isFirst={i === 0} {...position} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ company, dates, role, description, isFirst }) {
  let extraClasses = ""
  if (!isFirst) {
    extraClasses = "border-t-2 border-gray-200";
  }
  return (
    <div className={`py-8 flex flex-wrap md:flex-no-wrap ${extraClasses}`}>
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="tracking-widest font-medium title-font text-gray-900">
          {company}
        </span>
        <span className="mt-1 text-gray-500 text-sm">
          {dates}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {role}
        </h2>
        <p className="leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

ExperienceRow.propTypes = {
  company: PropTypes.string,
  dates: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isFirst: PropTypes.bool,
}

export default IndexPage;
