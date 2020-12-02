import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const All = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>All</h1>
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
  }
`