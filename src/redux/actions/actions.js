import Actions from "./actionTypes";

export const addTodoList = (data)=>{
    return {
        type:Actions.ADD_TODO_ACTION,
        payload:data
    }
}