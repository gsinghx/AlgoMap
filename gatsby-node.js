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
            fields {
              slug
            }
            frontmatter {
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
        index === 0 ? null : donePosts[index - 1].fields.slug
      const nextPostId =
        index === donePosts.length - 1 ? null : donePosts[index + 1].fields.slug

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.fields.slug,
          previousPostId,
          nextPostId,
        },
      })
    }
  })
  otherPosts.forEach((post, index) => {
    if (otherPosts.length > 0) {
      const previousPostId =
        index === 0 ? null : otherPosts[index - 1].fields.slug
      const nextPostId =
        index === otherPosts.length - 1
          ? null
          : otherPosts[index + 1].fields.slug

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.fields.slug,
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
    // return
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
