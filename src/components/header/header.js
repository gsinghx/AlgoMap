import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = ()=>{
    return(
        <div>
            <header style={{float:`left`}}className="global-header"><Link to="/">AlgoMap</Link></header>
        </div>
    )
}

export default Header;