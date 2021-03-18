import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "../utils/helpers"

const styles = {
  tagListDiv: {
    marginTop: "2em",
    marginLeft: "0em",
    lineHeight: 3,
  },
  tagTitle: {
    marginBottom: `1em`,
    marginTop: `0em`,
    fontWeight: `500`,
  },
}

const Categories = ({ data, location }) => {
  var groups = data.allMarkdownRemark.group
  console.log(groups)
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Categories</h1>
      <div style={styles.tagListDiv}>
        {groups.map(tag => (
          <Link
            to={`/categories/${kebabCase(tag.fieldValue)}`}
            key={tag.fieldValue}
          >
            <h5 style={styles.tagTitle}>
              {tag.fieldValue} ({tag.totalCount})
            </h5>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { status: { eq: "done" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
