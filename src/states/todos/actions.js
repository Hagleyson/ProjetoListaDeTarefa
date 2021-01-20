import * as todosTypes from "./type"

export function create(title){
    return (
        {
            type:todosTypes.CREATE,
            payload:{title:title}
        }
    )
}

export function update(id,title){
    return(
        {
            type:todosTypes.UPDATE,
            payload:{
                id:id,
                title:title
            }
        }
    )
}
export function remove(id){
    return(
        {
            type:todosTypes.REMOVE,
            payload:{
                id:id
            }
        }
    )
}
export function status(id,status){
    return(
        {
            type:todosTypes.STATUS,
            payload:{
                id:id,
                status:status
            }
        }
    )
}