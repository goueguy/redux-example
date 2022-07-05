
import Actions from './../actions/actionTypes';

export const filterReducer = (state=null,action)=>{
    switch (action.type) {

       case Actions.UPDATE_FILTER:
            return action.payload;
        default:
            return state;
    }
}