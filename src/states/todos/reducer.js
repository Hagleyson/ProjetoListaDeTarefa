import * as todosTypes from "./type"
import {v4 as uuidv4} from "uuid" 

function reducer(state,action){
    switch (action.type) {
        case todosTypes.CREATE:
            return state.concat({
                id:uuidv4(),
                title: action.payload.title,
                status: false
            }) 
        case todosTypes.UPDATE:
            return state.map((cur)=>{
                if(cur.id === action.payload.id){
                    return {...cur, title:action.payload.title}
                }else{
                    return cur;
                }
            })
        case todosTypes.STATUS:
            return state.map((cur)=>{
                if (cur.id === action.payload.id){
                    return {...cur, status: action.payload.status}
                }else{
                    return cur;
                }
            })
        case todosTypes.REMOVE:
            return state.filter((cur)=>{
                return cur.id !== action.payload.id
            })
        default:
            throw new Error("erro de escrita")
    }
}
export default reducer;