import Actions from './actionTypes';

export const setFilterAction = value =>(
    {
        type:Actions.UPDATE_FILTER,
        payload: value
    }
)