import { TodoItem } from './TodoItem';
import { todosSelector } from './../redux/store/todosSelector';
import { toggleTodoAction } from '../redux/actions/todosActions';
import { useCallback } from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { deleteTodoAction } from './../redux/actions/todosActions';

export const TodoList = ({todos,onToggle,onDelete})=>{
   
    return (
        <ul>
            {
                todos.map(todo=>(
                   <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete}/>
                ))
            }
        </ul>
    )
}

export const TodoListStore = ()=>{
    const todos = useSelector(todosSelector);
    const dispatch = useDispatch();
    const onToggle = useCallback(todo=>{
        dispatch(toggleTodoAction(todo))
    });
    const onDelete = useCallback(todo=>{
        dispatch(deleteTodoAction(todo))
    });
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
}
// function mapStateToProps(state){
//     return {
//         todos: todosSelector(state)
//     }
// }
// function mapDispatchToProps(dispatch){
//     return {
//         onToggle: todo =>dispatch(toggleTodoAction(todo))
//     }
// }
// export const TodoListStore = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)