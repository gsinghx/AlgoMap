import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./header.css"

const Header = ({ location }) => {
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
  console.log(location)
  return (
    <header className="global-header">
      <div className="header-title">
        <Link className="header-title-link" to="/">
          AlgoMap {emojis[parseInt(Math.random() * emojis.length)]}
        </Link>
        <div>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label id="switch" class="switch">
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  id="slider"
                />
                <span class="slider round"></span>
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>

      <div className="header-nav">
        <div>
          <Link
            className={location === "/" ? `nav-link-active` : `nav-link`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={location === "/all" ? `nav-link-active` : `nav-link`}
            to="/all"
          >
            All Posts
          </Link>
          <Link
            className={
              location === "/categories" ? `nav-link-active` : `nav-link`
            }
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className={location === "/tips" ? `nav-link-active` : `nav-link`}
            to="/tips"
          >
            Tips
          </Link>
        </div>
        <div>
          <Link
            className={
              location === "/resources" ? `nav-link-active` : `nav-link`
            }
            to="/resources"
          >
            Resources
          </Link>
          <Link
            className={location === "/about" ? `nav-link-active` : `nav-link`}
            to="/about"
            style={{ marginRight: `0px` }}
          >
            About
          </Link>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
