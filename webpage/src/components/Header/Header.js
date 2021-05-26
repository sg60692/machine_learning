import React from 'react';
import './Header.scoped.css';
function Header() {
    return (
        <div class="transparent-nav ">
            <nav>
                <div class="navbar">
                    <div class="navbar-wrapper container nav-ptop">                        
                        <a class="logo" href="/" aria-label="Tusharika Industries Logo" rel="noopener" style={{display:'flex'}}>
                            <img width="66" height="68" src={"https://erp.iitbbs.ac.in/lib/img/images/iitb.png"} class="nav-img"/>
                            <p class="nav-link nav-head">Tusharika Industries</p>
                        </a>
                        <span class="hamburger">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 306" width="35" height="20" 
                            style={{paddingTop:'10px'}}>
                                <g id="Layer">
                                    <g id="Layer">
                                        <path id="Layer" class="shp0" d="M16.05 27.82L595.95 27.82C604.82 27.82 612 21.64 612 13.91C612 6.23 604.71 0 595.95 0L16.05 0C7.18 0 0 6.18 0 13.91C0 21.59 7.29 27.82 16.05 27.82Z"></path>
                                        <path id="Layer" class="shp0" d="M16.05 166.91L595.95 166.91C604.82 166.91 612 160.73 612 153C612 145.32 604.71 139.09 595.95 139.09L16.05 139.09C7.18 139.09 0 145.27 0 153C0 160.68 7.29 166.91 16.05 166.91Z"></path>
                                        <path id="Layer" class="shp0" d="M16.05 306L595.95 306C604.82 306 612 299.82 612 292.09C612 284.41 604.71 278.18 595.95 278.18L16.05 278.18C7.18 278.18 0 284.36 0 292.09C0 299.77 7.29 306 16.05 306Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <ul class="ml-auto sidenav w0" id="mySidenav">
                            <li>
                                <a class="closebtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119 119" width="119" height="119">
                                        <g id="Layer">
                                            <path id="Layer" class="shp0" d="M1.6 1.6C0.7 2.4 0 3.7 0 4.3C0 5 12.2 17.7 27 32.5L54 59.5L26.9 86.6C4.3 109.2 -0.1 114.1 0.4 115.8C0.8 117 2 118.2 3.2 118.6C4.9 119.1 9.8 114.7 32.4 92.1L59.5 65L86.6 92.1C109.3 114.8 114.1 119.1 115.8 118.6C117 118.2 118.2 117 118.6 115.8C119.1 114.1 114.7 109.2 92.1 86.6L65 59.5L92.1 32.4C114.8 9.7 119.1 4.9 118.6 3.2C118.2 2 117 0.8 115.8 0.4C114.1 -0.1 109.2 4.3 86.6 26.9L59.5 54L32.5 27C17.7 12.2 5 0 4.3 0C3.7 0 2.4 0.7 1.6 1.6Z" ></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-link">
                                <a href="#Home" class="active">Home</a>
                            </li>
                            <li class="nav-link">
                                <a href="#About">About us</a>
                            </li>
                            <li class="nav-link">
                                <a href="#Product">Products and Services</a>
                            </li>
                            <li class="nav-link">
                                <a href="#Subsidiaries">Shareholders</a>
                            </li>
                            <li class="nav-link Header-contact">
                                <a href="#Contact">Contact us</a>
                            </li>
                            <li class="nav-buttons p-0 nav-link">
                                <a href="#Contact" class="btn btn-primary">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <a class="back-to-top">
                <img src="https://s31073.pcdn.co/wp-content/themes/media.net/images/back-to-top.png" alt=""/>
            </a>
        </div>
    )
}

export default Header
