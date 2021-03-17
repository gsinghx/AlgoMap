import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostAbbrev from "../components/postabbrev"

const All = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>All Posts</h1>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          return <PostAbbrev key={post.frontmatter.slug} post={post} />
        })}
      </ol>
    </Layout>
  )
}

export default All

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { status: { eq: "done" } } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`
