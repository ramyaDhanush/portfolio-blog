import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blogpost.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout navbarColor={"#000000b5"}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        slug={data.markdownRemark.fields.slug || ""}
      />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
      excerpt
    }
  }
`
