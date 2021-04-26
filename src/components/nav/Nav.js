import './Nav.css';
import React from 'react';
import hs from './hs.svg';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light back">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={hs} alt="" width="100" />
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;