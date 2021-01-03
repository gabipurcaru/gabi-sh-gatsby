import React from "react";
import PropTypes from 'prop-types';
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Blog({ data }) {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Contact"
            />
            <div>
                {data.allMarkdownRemark.edges.map(({ node: { frontmatter: { path, month, year, title }, excerpt } }) => (
                    <div className="py-8 px-4 lg:w-1/3" key={path}>
                        <div className="h-full flex items-start">
                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">{month}</span>
                                <span className="font-medium text-lg text-gray-800 title-font leading-none">{year}</span>
                            </div>
                            <div className="flex-grow pl-6">
                                <Link to={`/blog${path}`}><h1 className="title-font text-xl font-medium text-gray-900 mb-3">{title}</h1></Link>
                                <p className="leading-relaxed mb-5">{excerpt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout >
    );
}

Blog.propTypes = {
    data: PropTypes.any, // TODO
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            month: date(formatString: "MMMM")
            year: date(formatString: "YYYY")
            path
            published
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Blog;