import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="navbar-nav navbarPadding background-color-light-blue">
        <div className="container">
            <Link className="active navbar-brand text-dark font-weight-bold" to="/">Hem</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/holmgrensmeetings">Släktträffar</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/holmgrensbladet">Holmgrensbladet</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/board">Styrelsen</Link>
            <a className="navbar-brand text-dark font-weight-bold" href="http://www.holmgrenska.se/Export_3_generationer/Holmgrenska3.htm" target="_blank">Tidigare generationer</a>
        </div>
    </nav>
);

export default Navbar