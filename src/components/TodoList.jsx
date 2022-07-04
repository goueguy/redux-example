import {connect} from 'react-redux';
const TodoList = ({todos})=>{
    return JSON.stringify(todos)
}
export default TodoList;


const TodoListStore = connect(
    (state)=>(
        {
           
        }
    )
)