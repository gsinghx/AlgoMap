import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import Header from "./header"
import Footer from "./footer"
import Masthead from "./masthead"
import Newsletter from "./newsletter"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default Layout
