import React, { PropTypes }                 from "react"

import TodoList                             from "../TodoList"

const App = () => {
  return (
    <div>
      <h1 className="hello">To do list</h1>
      <TodoList />
    </div>
  )
}

export default App
