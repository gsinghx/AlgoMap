import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Status = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)
  const todo = posts.filter(node => node.frontmatter.status === "todo")
  const doing = posts.filter(node => node.frontmatter.status === "doing")
  const done = posts.filter(node => node.frontmatter.status === "done")

  const containerStyles = {}
  const statusStyles = {
    display: `flex`,
    flexWrap: `wrap`,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Status" />
      <h1>Status</h1>

      <div className="status-container">
        <div className="status-todo">
          <h3>Todo ({todo.length}):</h3>
          <div style={statusStyles}>
            {todo.map(node => {
              return <StatusItem key={node.fields.slug} node={node} />
            })}
          </div>
        </div>
        <div className="status-doing">
          <h3>Doing ({doing.length}):</h3>
          <div style={statusStyles}>
            {doing.map(node => {
              return <StatusItem key={node.fields.slug} node={node} />
            })}
          </div>
        </div>
        <div className="status-done">
          <h3>Done ({done.length}):</h3>
          <div style={statusStyles}>
            {done.map(node => {
              return <StatusItem key={node.fields.slug} node={node} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

const StatusItem = ({ node }) => {
  return (
    <div
      className="status-item"
      style={{
        width: `180px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        alignItems: `flex-start`,
        marginTop: `30px`,
        height: `auto`,
      }}
    >
      <small>{node.frontmatter.date}</small>
      <Link to={node.fields.slug} style={{ width: `170px` }}>
        {node.frontmatter.title}
      </Link>
    </div>
  )
}

export default Status

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          slug
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          description
          status
        }
      }
    }
  }
`
