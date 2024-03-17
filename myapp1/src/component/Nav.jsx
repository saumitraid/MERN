import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/student'}>Link1</Link>
                    </li>
                
                    <li className="nav-item">
                        <Link className="nav-link" to={'/emp'}>Link2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/user/Saumitra'}>User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/filter'}>Filter</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}
 
export default Nav;