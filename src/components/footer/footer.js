import React from "react"
import { Link } from "gatsby"
import "./footer.css"
import twitterIcon from "./twitter.svg"
import instagramIcon from "./instagram.svg"

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-nav">
        {/* <div>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/archive">
            Archive
          </Link>
          <Link className="nav-link" to="/tips">
            Tips
          </Link>
        </div>
         */}
        <div className="footer-social-icons">
          <a href="" className="footer-social-link">
            <img src={twitterIcon} />
          </a>
          <a href="" className="footer-social-link">
            <img src={instagramIcon} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
