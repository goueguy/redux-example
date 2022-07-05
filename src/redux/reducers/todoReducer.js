import Actions from "../actions/actionTypes";
const initialState = [
    {
        id:1,
        title:"Enregistrer le tutoriel",
        completed:false
    },
    {
        id:2,
        title:"Préparer le tutoriel",
        completed:true
    }
    ,
    {
        id:3,
        title:"Découvrir Redux",
        completed:false
    }
    ,
    {
        id:4,
        title:"Découvrir Redux Toolkit",
        completed:false
    }
]
const todoReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Actions.ADD_TODO_ACTION:
            return [
                ...state,
                action.payload
            ]
        case Actions.UPDATE_TODO_ACTION:
            return state.map(todo=>todo.id===action.payload.id ? {...todo, ...action.payload}:todo)
        case Actions.DELETE_TODO_ACTION:
            return state.filter(todo=>todo.id!==action.payload)
        default:
            return state
    }
}

export default todoReducer;