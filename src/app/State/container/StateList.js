import {connect} from 'react-redux';
import StateList from '../components/StateList';
import * as actions from '../state/action';

const mapStateToProps = (state) =>{
    console.log(state,"State in Connect");
    
    return{
        stateLists: state.stateLists
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        fetchStateLists:function() { 
            let actionFn = actions.fetchStateLists();
            dispatch(actionFn);
        }
    }
}

export default connect(mapStateToProps, 
    mapDispatchToProps)(StateList)