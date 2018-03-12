import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {App} from './App.js';

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Address from './components/Address';
import NotFound from './components/NotFound';


export default function Routes(props){
    console.log("Router");
    return(
        <Router>
            <App>
                {/* <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contacts}/>
                <Route path="*" component={NotFound}/>
                <Route path="/about" component={About}/> */}
            </App>
        </Router>
    )
}
