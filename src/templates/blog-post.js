import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Author from "../components/author";

export default function BlogPost({
    data,
}) {
    const { markdownRemark: post, imageSharp: face } = data;
    return (
        <>
            <Helmet title={`Gabi Purcaru - ${post.frontmatter.title}`} />
            <Layout>
                <SEO
                    keywords={[]}
                    title={`Gabi Purcaru - ${post.frontmatter.title}`}
                />
                <div>
                    <h1 className="text-3xl mb-4">{post.frontmatter.title}</h1>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>

                <hr className="my-8" />

                <Author face={face} />
            </Layout >
        </>
    )
}

BlogPost.propTypes = {
    data: PropTypes.any, // TODO
}

export const pageQuery = graphql`
  query BlogPostByPath($title: String!) {
    markdownRemark(frontmatter: { path: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
    ...AuthorFaceFragment
  }`;