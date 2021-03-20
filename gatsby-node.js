const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { kebabCase } = require("./src/utils/helpers")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1000
        ) {
          nodes {
            frontmatter {
              slug
              tags
              status
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  const donePosts = posts.filter(post => post.frontmatter.status === "done")
  const otherPosts = posts.filter(post => post.frontmatter.status !== "done")
  donePosts.forEach((post, index) => {
    if (donePosts.length > 0) {
      const previousPostId =
        index === 0 ? null : donePosts[index - 1].frontmatter.slug
      const nextPostId =
        index === donePosts.length - 1
          ? null
          : donePosts[index + 1].frontmatter.slug

      createPage({
        path: post.frontmatter.slug,
        component: blogPost,
        context: {
          id: post.frontmatter.slug,
          previousPostId,
          nextPostId,
        },
      })
    }
  })
  otherPosts.forEach((post, index) => {
    if (otherPosts.length > 0) {
      const previousPostId =
        index === 0 ? null : otherPosts[index - 1].frontmatter.slug
      const nextPostId =
        index === otherPosts.length - 1
          ? null
          : otherPosts[index + 1].frontmatter.slug

      createPage({
        path: post.frontmatter.slug,
        component: blogPost,
        context: {
          id: post.frontmatter.slug,
          previousPostId,
          nextPostId,
        },
      })
    }
  })

  const tagPage = path.resolve("./src/templates/category.js")
  let tags = []
  posts.forEach(post => {
    tags = tags.concat(post.frontmatter.tags)
  })

  tags.forEach((tag, index) => {
    createPage({
      path: `/categories/${kebabCase(tag)}`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    return
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
