
import * as filterTypes from "./type"

function filterReducer(state,action){
    switch (action.type) {
        case filterTypes.CHANGE:
            return action.payload.value
        default:throw new Error()
        
    }
}
export default filterReducer
