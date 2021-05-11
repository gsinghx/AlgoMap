import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tips = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Tips</h1>
      <div>- Validate inputs. check for null. Graph/tree: Bfs or dfs</div>
    </Layout>
  )
}

export default Tips

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
