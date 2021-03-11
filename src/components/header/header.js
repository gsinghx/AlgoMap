import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = () => {
  const emojis = [
    "🔥",
    "❤️",
    "👍",
    "🍑",
    "🍺",
    "🏄",
    "🎯",
    "⚽",
    "😈",
    "👋",
    "✌️",
    "💪",
    "🏃",
    "🎒",
    "🎓",
  ]
  return (
    <header className="global-header">
      <div className="header-title">
        <Link className="header-title-link" to="/">
          AlgoMap {emojis[parseInt(Math.random() * emojis.length)]}
        </Link>
        <div></div>
      </div>

      <div className="header-nav">
        <div>
          <Link className="nav-link" to="/all">
            All Posts
          </Link>
          <Link className="nav-link" to="/categories">
            Categories
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/books">
            Books
          </Link>
          <Link className="nav-link" to="/about" style={{ marginRight: `0px` }}>
            About
          </Link>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
