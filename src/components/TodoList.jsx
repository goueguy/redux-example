import {connect} from 'react-redux';
import { TodoItem } from './TodoItem';
import Actions from './../redux/actions/actionTypes';

export const TodoList = ({todos,onToggle})=>{
    return (
        <ul>
            {
                todos.map(todo=>(
                   <TodoItem todo={todo} onToggle={onToggle} key={todo.id}/>
                ))
            }
        </ul>
    )
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}
function mapDispatchToProps(dispatch){
    return {
        onToggle: todo =>dispatch({
            type:Actions.UPDATE_TODO_ACTION,
            payload: {
                ...todo, completed:!todo.completed
            }
        })
    }
}
export const TodoListStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)