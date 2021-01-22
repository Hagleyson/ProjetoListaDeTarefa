import React from "react"
import styles from "./select.module.css"
function Select({names,onChange,value}){   
    
    return(
    <select className={styles.selectFooter} value={value} onChange={onChange}>
        {names.map((cur)=>{
            return (
                <option key={cur.value} value={cur.value} >
                    {cur.title}
                </option>
            )
        })}
    </select>
    )
}
export default Select