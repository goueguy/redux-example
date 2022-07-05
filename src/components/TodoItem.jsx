import React from 'react'

export const TodoItem = ({todo,onToggle,onDelete}) => {
 return <li>
    <label>
        <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo)}/>
        {todo.title}
        <button onClick={()=>onDelete(todo)}>X</button>
    </label>
 </li>
}
