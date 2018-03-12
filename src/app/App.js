import React from "react";
import Home from "./components/Home";
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import StateList from './State/container/StateList';
import StateView from './State/container/StateView';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Address from './components/Address';
import NotFound from './components/NotFound';
import About from './components/About';

export class App extends React.Component {
    
    render() {
        console.log("app render");
        return(
            <div>  
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contacts}/>                
                <Route exact path="/about" component={About}/>
                <Route exact path="/states" component={StateList}/>
                <Route exact path="/states/:id" component={StateView}/>
                <Route path="/*" component={NotFound}/>   
            </Switch>
            <Footer/>
            </div>
        )
        
    }
}