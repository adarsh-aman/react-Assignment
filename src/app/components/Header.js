
import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    constructor() {
        super();
    }
    
    
    
    render() {
        console.log("header render");
        return (
            <div>
                <h3>Header Component</h3>
                <NavLink exact to="/"   className="button" activeClassName="success" >
                     Home
                </NavLink>

                <NavLink to="/about"   className="button" activeClassName="success" >
                     About
                </NavLink>

                <NavLink to="/contact" className="button" activeClassName="success" >
                     Contacts
                </NavLink>
                
                <NavLink to="/states" className="button" activeClassName="success" >
                     States
                </NavLink>
                <hr/>
            </div>
        )
    }
} 
