
import React, {Component} from "react";
import PropTypes from "prop-types";
import StateList from './StateList';
import {fetchStateLists} from "../state/action";
import {connect} from 'react-redux';
import * as actions from '../state/action';

export default class StateView extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
       this.props.fetchStateLists();
    //    this.setState({itemdetails})
      //  this.props.fetchViewState(this.props.match.params.id);
    }
    
    renderStateViewAction(stateLists){
        var curId = Number(this.props.match.params.id);
        return this.props.stateLists.map((item,index)=>{
            if(item.id === curId){
                return(
                    <div>
                    <div>Id: {this.props.match.params.id}</div>
                    <div>Code:{this.props.stateLists[index].code} </div>
                    <div>Name:{this.props.stateLists[index].name}</div>
                    </div>
                )
            }
           })
    }
    render() {
        let {stateLists} = this.props;
        console.log("this",this.props.match.params.id);
        //console.log("List",this.props);
        return (
            <div> 
                {this.renderStateViewAction(stateLists)}
            </div>
        )
    }
} 


StateView.defaultProps = {
    
}

StateView.propTypes = {
    
}