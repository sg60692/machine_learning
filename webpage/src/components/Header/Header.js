import React, { useState, Fragment } from 'react'
import './Header.scoped.css';
function Header() {  
    return (
        <div id="Header" >
            <a className="nav-heading">
                <img src="https://erp.iitbbs.ac.in/lib/img/images/iitb.png"/>
                <span>
                    ML
                </span>
            </a>
            <ul className="sidebar">
                <li><a>Cancer Prediction</a></li>
                <li><a>Linear Regression</a></li>
                <li><a>Logistic Regression</a></li>
                <li><a>Library</a></li>
            </ul>
        </div>
    )
}

export default Header
