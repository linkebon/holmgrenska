import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';
import Navbar from './Navbar';
import Board from "./Board";
import HolmgrensBladet from "./HolmgrensBladet";
import Footer from "./Footer";

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/board" component={Board}/>
                    <Route exact path="/holmgrensbladet" component={HolmgrensBladet}/>
                    <Route component={NoMatch}/>
                </Switch>
                <br/>
                <Footer />
            </div>
        </div>
    </Router>
);

export default App
