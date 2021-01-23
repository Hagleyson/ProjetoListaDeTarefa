import React, {  useReducer } from "react";
import TodoContext from "./Context";
import todoReducer from "./reducer";

function Provider({children}){
    const [todo,dispacth] = useReducer(todoReducer,
        [],
        (defaultState) => {
            const persistedState = JSON.parse(window.localStorage.getItem("todoState"));
            return persistedState !== null ? persistedState : defaultState;
          }
        );
    return(
       <TodoContext.Provider value={{todo,dispacth}}>
           {children}
       </TodoContext.Provider>
    )
}
export default Provider;