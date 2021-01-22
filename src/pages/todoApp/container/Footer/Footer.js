import React, { useContext,useCallback, useState, useEffect  } from "react"
import Select from "./select/Select"
import FilterContext from "./../../../../states/filter/Context"
import * as FilterActions from "./../../../../states/filter/actions"
import styles from "./footer.module.css"
function Footer(){
    const {filter,filterDispacth} = useContext(FilterContext)    
    const [selectValue,setSelectValue] = useState(filter)
    const handleChange = useCallback((e)=>{        
        setSelectValue(e.target.value)
    },[setSelectValue])

    const updateFilter = useCallback((filtered)=>{
        filterDispacth(FilterActions.change(filtered))
    },[filterDispacth])

    useEffect(()=>{        
        updateFilter(selectValue)               
    },[updateFilter,selectValue])

    return (
        <footer className={styles.footer}>
            <div>
                <Select
                
                names={[
                    {value:"all",title:"Todas as atividades"},
                    {value:"activityFalse",title:"Atividades para fazer"},
                    {value:"activityTrue",title:"Atividades feitas"}
                ]}
                onChange={handleChange}
                />
            </div>
        </footer>
    )
}
export default Footer