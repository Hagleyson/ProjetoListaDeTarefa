import React,{ useContext,useCallback, useState,useEffect } from "react"
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
    const handleS = useCallback((i,s)=>{
        dispacth(todoAction.status(i,s))        
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
    useEffect(() => {
        localStorage.setItem("todoState", JSON.stringify(todo));
      }, [todo]);
    return (
        <section className={styles.sectionC}>
            <h1>Atividades</h1>            
            <ul>
                { filterContent(todo,filter).map((todoCur)=>{
                        return (
                            <li key={todoCur.id}>
                            <Content 
                                id={todoCur.id}
                                title={todoCur.title}   
                                statuss={todoCur.status}                     
                                handleRemove={()=>{handleApagar(todoCur.id)}}
                                handleStatus={handleS}
                                handleModal={()=>{openModal(todoCur.id,todoCur.title)}}                        
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