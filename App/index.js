import React, { PropTypes }                 from "react"

import TodoList                             from "../TodoList"
import TodoForm                             from "../TodoForm"

const App = () => {
  return (
    <div>
      <h1 className="hello">To do list</h1>
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default App
