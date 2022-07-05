import Actions from "./actionTypes";

export const addTodoList = (data)=>{
    return {
        type:Actions.ADD_TODO_ACTION,
        payload:data
    }
}

export const toggleTodoAction = (todo)=>({
    type:Actions.UPDATE_TODO_ACTION,
    payload:{
        ...todo, completed: !todo.completed
    }
});

export const deleteTodoAction = todo =>(
    {
        type:Actions.DELETE_TODO_ACTION,
        payload: todo.id
    }
)