
import React, {Component} from "react";
import PropTypes from "prop-types";
import {fetchStateLists} from "../state/action";
import {connect} from 'react-redux';
import * as actions from '../state/action';

export default class StateList extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleView = this.handleView.bind(this);
        
    }

    handleView(id){
        console.log("view button clicked");
        window.location.href = `/states/${id}`;
        event.preventDefault();
    }
  

    handleEdit(){
        console.log("edit Button clicked");
    }

componentWillMount(){
    this.props.fetchStateLists();
    //this.curState =this.list;
    //console.log("asdad",this.state);
}


    renderStateListAction(stateLists){
        
        return stateLists.map((list,i) =>{
            return (
                <tr key={i}>
                    <td  data-id={list.id}>{list.id}</td>
                    <td>{list.code}</td>
                    <td>{list.name}</td>
                    {/* <td>adad</td>
                    <td>dasda</td>
                    <td>cdsc</td> */}
                    <td>
                        <button onClick={this.handleView.bind(this,list.id)}>View</button>
                     </td>
                    <td>
                        <button onClick={this.handleEdit}>Edit</button>
                     </td>
                </tr>
            )
        })
    }
    
    render() {
        let {stateLists} = this.props;
        console.log(stateLists,"stateLists");
        
        return (
            <div> 
                <table>
                    <tbody>
                        {this.renderStateListAction(stateLists)}
                    </tbody>  
                </table>          
            </div>
        )
    }
} 
