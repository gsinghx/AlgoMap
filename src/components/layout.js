import React from "react"
import { Link } from "gatsby"
import Nav from "./Nav"

const Layout = ({ location, title, children }) => {
  const [open, setOpen] = React.useState(false);
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header style={{float:`left`}}className="global-header">{header}</header>
      <div style={{
        float:`right`,
        fontSize:`30px`,
        cursor:`pointer`
      }}
      onClick={() => setOpen(true)}> &#9776;</div>
      <div style={{clear:`both`}}></div>
      <Nav
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {open}
      </Nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
