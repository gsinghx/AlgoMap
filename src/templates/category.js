import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostAbbrev from "../components/postabbrev"

const CategoryTemplate = ({ pageContext, data, location }) => {
  const totalCount = data.allMarkdownRemark.totalCount
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Categories" description="Categories of algorithm posts" />
      <h1>
        {totalCount} posts for '{pageContext.tag}'
      </h1>
      <main>
        <ol style={{ listStyle: `none` }}>
          {posts.map(node => {
            return <PostAbbrev key={node.frontmatter.slug} post={node} />
          })}
        </ol>
      </main>
      <div style={{ marginTop: 50 }} />
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryBySlug($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, status: { eq: "done" } } }
    ) {
      totalCount
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
