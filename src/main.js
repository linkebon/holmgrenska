import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import App from "./components/App";

render(
    <App/>,
    document.getElementById('reactView')
);