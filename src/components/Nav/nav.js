import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from 'react';
import { createPortal, render } from 'react-dom';
import "./index.css";

const Nav = ({isOpen, onClose}) => {
    return isOpen
    ? createPortal(
        <div className="modal">
          <div className="image-container-modal">
            <div>
                <h1>MENU</h1>
            </div>
          </div>
          <button
            className="close-modal"
            onClick={() => {
              onClose();
            }}
            type="button"
          >
            &times;
          </button>
        </div>,
        document.getElementById('portal'),
      )
    : null;
}

export default Nav
