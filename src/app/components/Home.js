// Home component shall describe description about the website,
// about company tagline, hero section in bold text

import React from 'react';
import {render} from 'react-dom';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        console.log("home constructor");
    }

    render(){
        let company = "ABC pvt Ltd";
        return(
            <div>
                <h1>{company}</h1>
                <h2>Feeling good about making a difference.</h2>
                <p>
                    ABC Consulting is a new company that provides expertise in
                    search marketing solutions for business on a worldwide basis,
                    including website promotion, online advertising and search engine 
                    optimization techniques to improve its clients' positioning in the search engines.
                    We will cater to the higher education market, including colleges,
                    universities and professional educational institutions</p>
            </div>
        );
    }    
}