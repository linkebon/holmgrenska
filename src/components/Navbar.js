import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav className="navbar-nav navbarPadding background-color-light-blue">
        <div className="container">
            <Link className="active navbar-brand text-dark font-weight-bold" to="/">Hem</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/holmgrensmeetings">Släktträffar</Link>
            <Link className="navbar-brand dropdown-toggle font-weight-bold text-dark" data-toggle="dropdown" to="#" role="button"
                  aria-haspopup="true"
                  aria-expanded="false">Släktinformation</Link>
            <div className="dropdown-menu text-dark" aria-labelledby="Preview">
                <Link className="dropdown-item text-dark font-weight-bold" to="/6324">Släkt - 6324* (Eskilstuna)</Link>
            </div>
            <Link className="navbar-brand text-dark font-weight-bold" to="/holmgrensbladet">Holmgrensbladet</Link>
            <Link className="navbar-brand text-dark font-weight-bold" to="/board">Styrelsen</Link>
            <a className="navbar-brand text-dark font-weight-bold" href="http://www.holmgrenska.se/Export_3_generationer/Holmgrenska3.htm" target="_blank">Tidigare generationer</a>
        </div>
    </nav>
);

export default Navbar