import React from "react"
import { Link } from "gatsby"
import "./masthead.css"

const MastHead = ()=>{
    return(
        <div>
            <header style={{float:`left`}}className="global-header"><Link to="/">Masthead</Link></header>
        </div>
    )
}

export default MastHead;