// Implement Address Component, an reusable component
// that display address that consists of street, city, state, pincode, phone number information.


import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state ={
            headOffice: props.headOffice,
            branchofc: props.branchofc
        }
    }
    
    
    render() {
        console.log("Address page render");
        return (
            <div> 
            <h2>Address</h2>
            <p>Head Office: {this.state.headOffice}</p>
            <p>Branch Office: {this.state.branchofc}</p>
            street:'Street no 2',
            city: 'Gurgaon',
            state: 'Haryana',
            pin: '122001',
            phone: '0909098899'
            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}