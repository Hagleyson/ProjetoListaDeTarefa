import * as filterTypes from "./type"

export function change(value){
    return (
        {
            type:filterTypes.CHANGE,
            payload:{
                value: value
            }
        }
    )
}
