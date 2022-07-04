import { useRef} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodoList } from './../redux/actions/actions';

const AddTodoList = ()=>{

    const nameRef = useRef("");
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    const addTitle = (e)=>{
        let data = {
            id:3,
            title:nameRef.current.value,
            completed:true
        }
        dispatch(addTodoList(data))
    }
    return(
        <div>
            <input type="text" placeholder="Add title" ref={nameRef} />
            <button type="button" onClick={(e)=>addTitle(e)}>Add</button>
            {
                todos.map(todo=>(
                    <p key={todo.id}>{todo.title}</p>
                ))
            }
        </div>
    )
}
export default AddTodoList;