import * as service from './service';
import * as ActionTypes from './action-types'
// export function getStateList(){
    
// }

const initStateList=(stateLists)=>{
    return {
        type: ActionTypes.INIT_STATELISTS,
        payload: {
            stateLists: stateLists
        }
    }
}

// const viewState=(state)=>{
//     return {
//         type: ActionTypes.VIEW_STATES,
//         payload:{
//             curState: state
//         }
//     }
// }


export function fetchStateLists(){
    //console.log("fetch state list called");
    //const serviceList =service.getStateLists();
    
    return function(dispatch,getState){
        console.log("dispatch state list called");
        service.getStateLists()
        .then (stateLists=>{
            console.log("function under then dispatch");
            let action = initStateList(stateLists);
            console.log("stateLists ",stateLists);
            dispatch(action);
        });
    }

}

// export function fetchViewState(id){
//     return function(dispatch,getState){
//         return service.getState(id)
//         .then(state=> {
//             let action = viewState(state);
//             dispatch(action);
//         })
//     }
// }