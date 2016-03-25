import React, { PropTypes }                 from "react"

import TodoList                             from "../TodoList"

const App = ({ todos }) => {
  return (
    <div>
      <h1 className="hello">To do list</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
