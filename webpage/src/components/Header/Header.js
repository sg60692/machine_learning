import React from 'react';
import './Header.scoped.css';

function Header() {

  return (
    <div>
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-2x fa-bars"></i>
                    </button>
                    <a class="navbar-brand page-scroll">
                        <img src="img/output-onlinepngtools.png" height="32" width="50" />Kevin Paulose</a>
                </div>
                <div class="collapse navbar-collapse navbar-main-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden">
                            <a class="page-scroll" href="#page-top"></a>
                        </li>
                        <li><a class="page-scroll" href="#about">About</a></li>
                        <li><a class="page-scroll" href="#services">Passion</a></li>
                        <li><a class="page-scroll" href="#experience">Experience</a></li>
                        <li><a class="page-scroll" href="#portfolio">Work</a></li>
                        <li><a class="page-scroll" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Header
