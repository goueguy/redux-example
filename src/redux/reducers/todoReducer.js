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
]
const todoReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Actions.ADD_TODO_ACTION:
            return [
                ...state,
                action.payload
            ]
            break;
        default:
            return state
    }
}

export default todoReducer;