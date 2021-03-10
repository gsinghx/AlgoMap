import { Link } from "gatsby"
import React from 'react';
import { createPortal } from 'react-dom';
import "./index.css";

const Nav = ({isOpen, onClose}) => {
    return isOpen
    ? createPortal(
        <div className="modal" >
          <div className="global-wrapper modal-container">
          <button
            className="close-modal"
            onClick={() => {
              onClose();
            }}
            type="button"
          >
            &times;
          </button>
          <div style={{clear:`both`}}></div>
          <ul className="modal-links" >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/all'>All Posts</Link></li>
            
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/about'>About</Link></li>
            </ul>
          
          </div>
        </div>,
        document.getElementById('portal'),
      )
    : null;
}

export default Nav
