import React,{ useContext,useCallback, useState } from "react"
import TodoContext from "./../../../../states/todos/Context"
import Content from "./Content/Content"
import * as todoAction from "./../../../../states/todos/actions"
import UpdatePage from "./Modal/UpdatePage"
import FilterContext from "./../../../../states/filter/Context"
import styles from "./sectionContent.module.css"

function filterContent(todo,curFilter){
    switch (curFilter) {
        case 'all':
            return todo    
        case 'activityFalse':
            return todo.filter((cur)=>{
                return cur.status === false
            })
        case 'activityTrue' :
            return todo.filter((cur)=>{
                return cur.status === true
            })
        default: 
            throw new Error()
    }
}
function SectionContent(){
    const {todo,dispacth} = useContext(TodoContext)
    const handleApagar = useCallback((id)=>{
        dispacth(todoAction.remove(id))
    },[dispacth])    
    const handleStatus = useCallback((id,status)=>{
        dispacth(todoAction.status(id,status))        
    },[dispacth])
    const [curId,setCurId] = useState(null)
    const [title,setTitle] = useState(null)
    const openModal = useCallback((id,title)=>{
        setCurId(id)
        setTitle(title)        
    },[setCurId])
    const closeModal = useCallback(()=>{
      setCurId(null)      
    },[setCurId])
    const handleUpdate = useCallback((id,title)=>{        
        dispacth(todoAction.update(id,title))
    },[dispacth])
    const {filter} = useContext(FilterContext)
    
    return (
        <section className={styles.sectionC}>
            <h1>Atividades</h1>            
            <ul>
                { filterContent(todo,filter).map((todo)=>{
                        return (
                            <li key={todo.id}>
                            <Content 
                                id={todo.id}
                                title={todo.title}   
                                status={todo.status}                     
                                handleRemove={()=>{handleApagar(todo.id)}}
                                handleStatus={handleStatus}
                                handleModal={()=>{openModal(todo.id,todo.title)}}                        
                            />  
                            </li>       
                            
                        )
                     })
                    
               }
               
               
            </ul>
            {curId && 
            <UpdatePage
                closeModal={()=>{closeModal()}}
                id= {curId}
                title={title}
                valuesUpdate={handleUpdate}                
            />
            }
        </section>
    )   
}


export default SectionContent