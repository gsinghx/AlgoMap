import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Books = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Books</h1>
    </Layout>
  )
}

export default Books

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`