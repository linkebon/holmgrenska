import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import App from "./components/App";
import fontawesome from '@fortawesome/fontawesome'
import { faChevronDown} from '@fortawesome/fontawesome-free-solid'

// add wanted font awesome stuff
fontawesome.library.add(faChevronDown);

render(
    <App/>,
    document.getElementById('reactView')
);