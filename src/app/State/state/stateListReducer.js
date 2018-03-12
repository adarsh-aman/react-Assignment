import * as ActionTypes from './action-types';


const INITIAL_STATE ={
    stateLists: []
}

export default function StateListReducer(state = INITIAL_STATE,action){
    console.log("statereducer",state ,action,action.payload);
    switch(action.type){
        case ActionTypes.INIT_STATELISTS:
        return Object.assign({}, state, {stateLists: action.payload.stateLists});
        default: 
        return state;
    }

}