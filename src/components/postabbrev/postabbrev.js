import React from "react"
import { Link } from "gatsby"
import "./postabbrev.css"
import { kebabCase } from "../../utils/helpers"

const PostAbbrev = ({ post }) => {
  return (
    <li>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <h2>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline" className="post-list-item-link">
              {post.frontmatter.title}
            </span>
          </Link>
        </h2>
        {post.frontmatter.tags.map(tag => {
          return (
            <Link
              to={`/categories/${kebabCase(tag)}`}
              className="post-list-item-tag"
              key={Math.random()}
            >
              #{tag}
            </Link>
          )
        })}
      </article>
    </li>
  )
}

export default PostAbbrev
