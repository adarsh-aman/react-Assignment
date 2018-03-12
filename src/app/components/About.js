// About Component should display general description about the company,
// Team members, their name, role with photos and description/bio [text] in a list.


import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("About page render");
        return (
            <div> 
            <h1>ABC pvt Ltd</h1>
            <p>
                ABC Consulting is a new company that provides expertise in
                search marketing solutions for business on a worldwide basis,
                including website promotion, online advertising and search engine 
                optimization techniques to improve its clients' positioning in the search engines.
            </p>
            <div className="details1">
            <ul>
                <li>Name: Adarsh Aman</li>
                <li>Role: Web Developer</li>
                <li className="imageclass"><img src="../../assets/images1.png" /></li>
                <li>Desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            </div>
            <div className="details1">
            <ul>
                <li>Name: Aman Kumar</li>
                <li>Role: NodeJs</li>
                <li className="imageclass"><img src="../../assets/image3.jpg" /></li>
                <li>Desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            </div>
            <div className="details1">
            <ul>
                <li>Name: Kumar Aditya</li>
                <li>Role: UI/UX</li>
                <li className="imageclass"><img src="../../assets/image2.jpg" /></li>
                <li>Desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            </div>
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}