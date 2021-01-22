import React, { useState,useCallback } from "react"
import styles from "./content.module.css"
import {ReactComponent as UpdateTitleIcon} from "../../../../../assets/icons/update-icon.svg"
import {ReactComponent as DeleteTitleIcon} from "../../../../../assets/icons/delete-icon.svg"
//import { useEffect } from "react/cjs/react.development"
function Content({title,id,handleRemove,handleStatus,statuss,handleModal}){
    const [isChecked,setIsChecked] = useState(statuss)
    const handleChange= useCallback((e)=>{
        handleStatus(id, isChecked)
        setIsChecked(e.target.checked)        
    },[setIsChecked, isChecked, id, handleStatus])
    /*useEffect(()=>{        
        handleStatus(id,isChecked)
    },[id, isChecked,handleStatus])*/
    return(
        <>
        <div className={styles.containerList}>
            <div className={styles.title}>
                <span className={statuss ? styles.color:styles.false} >{title}</span>
            </div >
            <div className={styles.icon}>
                <button onClick={handleRemove}><DeleteTitleIcon/></button>
                <input type="checkbox" checked={isChecked} onChange={handleChange}/>
                <button onClick={handleModal}><UpdateTitleIcon/></button>
            </div>
        </div>
        </>
    )
}
export default Content