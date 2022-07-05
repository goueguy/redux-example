import React from 'react'

export const TodoItem = ({todo,onToggle}) => {
 return <li>
    <label>
        <input type="checkbox" checked={todo.completed} onChange={()=>onToggle(todo)}/>{todo.title}
    </label>
 </li>
}
