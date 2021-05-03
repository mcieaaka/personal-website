import './Nav.css';
import React from 'react';
import ml from './mainlogo.svg';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar fixed-top navbar-light back">
                    <div className="container">
                        <a className="nav-link" href="#landing">HARSHIT<br/>SRIVASTAVA</a>
                        <a className="navbar-brand" href="/">
                            <img src={ml} alt="" width="50" />
                        </a>
                        <a className="nav-link" href="/">ABOUT</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;