import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="navbar-nav navbarPadding background-color-light-blue">
        <div className="container">
            <Link className="navbar-brand text-dark font-weight-bold" to="/">Hem</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/holmgrensbladet">Holmgrensbladet</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/board">Styrelsen</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="Anders Holmgrens ättlingar 3 generationer.html" target="_blank">Tidigare generationer</Link>
        </div>
    </nav>
);

export default Navbar