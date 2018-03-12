import {connect} from 'react-redux';
import StateView from '../components/StateView';
import * as actions from '../state/action';

const mapStateToProps= (state)=>{
    return {
        stateLists : state.stateLists
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        fetchStateLists: function() {
            let actionN = actions.fetchStateLists();
            dispatch(actionN);
        }   
    }
}

export default connect(mapStateToProps, 
    mapDispatchToProps) (StateView)