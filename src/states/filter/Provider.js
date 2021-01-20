import React, { useReducer } from "react"
import FilterContext from "./Context"
import filterReducer from "./reducer"

function Provider({children}){
    const [filter,filterDispacth] = useReducer(filterReducer,"all");
    return (
    <FilterContext.Provider value={{filter,filterDispacth}}>
        {children}
    </FilterContext.Provider>
    )
    
}
export default Provider;