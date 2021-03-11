import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import Header from "./header"
import Footer from "./footer"
import Masthead from "./masthead"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header/>
      
      <div style={{clear:`both`}}></div>
      <Masthead/>
      <main>{children}</main>
      <Footer/>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
