import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostAbbrev from "../components/postabbrev"
import * as JsSearch from "js-search"
import shuffleIcon from "../assets/images/shuffle.svg"

const All = ({ data, location }) => {
  const rebuildIndex = () => {
    const allPosts = posts
    const dataToSearch = new JsSearch.Search("id")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")
    dataToSearch.addIndex(["frontmatter", "title"])
    dataToSearch.addIndex(["frontmatter", "tags"])

    dataToSearch.addDocuments(allPosts) // adds the data to be searched

    setSearch(dataToSearch)
  }

  const searchData = e => {
    console.log(e.target.value)
    console.log(getSearch)
    const search = getSearch
    const queryResult = search.search(e.target.value)

    setSearchQuery(e.target.value)
    setSearchResults(queryResult)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  const showRandomArticle = e => {
    let randomArticle = posts[parseInt(Math.random() * posts.length)]

    navigate(randomArticle.fields.slug)
  }

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [getSearch, setSearch] = React.useState([])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])

  React.useEffect(() => {
    rebuildIndex()
  }, [])

  // console.log(posts)

  const resultsToShow = searchQuery === "" ? posts : searchResults

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>All Posts</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            margin: "0",
            display: `flex`,
            alignItems: `center`,
            justifyContent: `left`,
          }}
        >
          <input
            id="Search"
            value={searchQuery}
            onChange={searchData}
            placeholder="Search by Title or Tags"
            style={{
              width: "400px",
              padding: `.8rem 1rem`,
              borderRadius: `5px`,
              outline: `none`,
              border: `1px solid var(--color-text-light)`,
            }}
          />
          <div
            style={{
              height: `56px`,
              cursor: `pointer`,
              marginLeft: `10px`,
            }}
            onClick={showRandomArticle}
          >
            <img
              src={shuffleIcon}
              style={{
                marginTop: `3px`,
                width: `50px`,
                height: `50px`,
              }}
            />
          </div>
        </div>
      </form>
      <ol style={{ listStyle: `none` }}>
        {resultsToShow.map(post => {
          return <PostAbbrev key={post.fields.slug} post={post} />
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
        fields {
          slug
        }
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
