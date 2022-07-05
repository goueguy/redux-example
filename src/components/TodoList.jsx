import {connect} from 'react-redux';
import { TodoItem } from './TodoItem';
import Actions from './../redux/actions/actionTypes';
import { todosSelector } from './../redux/store/todosSelector';
import { toggleTodoAction } from '../redux/actions/todosActions';

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
        todos: todosSelector(state)
    }
}
function mapDispatchToProps(dispatch){
    return {
        onToggle: todo =>dispatch(toggleTodoAction(todo))
    }
}
export const TodoListStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)