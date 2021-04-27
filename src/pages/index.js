import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/masthead"
import "./index.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <Masthead /> */}
      <div className="grid-container">
        <div className="quadrant border-right border-bottom">
          <h3>
            <Link to="/categories/tree">#Tree</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("Tree"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="quadrant border-bottom">
          <h3>
            <Link to="/categories/linked-list">#Linked List</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("LinkedList"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="quadrant border-right border-bottom">
          <h3>
            <Link to="/categories/graph">#Graph</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("Graph"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="quadrant border-bottom">
          <h3>
            <Link to="/categories/array">#Array</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("Array"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="quadrant border-right">
          <h3>
            <Link to="/categories/bfs">#BFS</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("BFS"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="quadrant">
          <h3>
            <Link to="/categories/trie">#Trie</Link>
          </h3>
          <div className="quadrant-links">
            {posts
              .filter(post => post.frontmatter.tags.includes("Trie"))
              .slice(0, 5)
              .map(post => (
                <Link className="quadrant-link-item" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

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
        fields {
          slug
        }
        frontmatter {
          status
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
