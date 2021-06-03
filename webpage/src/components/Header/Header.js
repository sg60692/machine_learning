import React, { useState, Fragment } from 'react'
import './Header.scoped.css';
import TocIcon from '@material-ui/icons/Toc';
import CancelIcon from '@material-ui/icons/Cancel';
function Header() {  
    return (
        <div>
            <input type="checkbox" id="check"/>
            <label for="check">
                <TocIcon id="nav-btn"/>
                <CancelIcon id="nav-cancel"/>
            </label>
            <div id="Header" class="H">
                
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
        </div>
    )
}

export default Header
