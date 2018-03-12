// Contact component shall have Address component as child,
// Contact component shall pass head office, branch office addresses to Address component


import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address";


export default class Contacts extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("contact page render");
        return (
            <div> 
            <h2>Contacts</h2>
            <Address headOffice="NetherLand" branchofc="India"/>
            </div>
        )
    }
} 


Contacts.defaultProps = {
    
}

Contacts.propTypes = {
    
}