import React from "react";
import Todos from "./pages/todoApp/container/Todos"
import TodosProvider from "./states/todos/Provider"
import FilterProvider from "./states/filter/Provider"
function App() {
  return (
    <TodosProvider>
      <FilterProvider>
      <Todos/>
      </FilterProvider>
    </TodosProvider> 
  );
}

export default App;
