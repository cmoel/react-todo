import React, { PropTypes }                 from "react"

import TodoList                             from "../TodoList"

const App = ({ todos }) => {
  const handleClick = (text) => { console.log(text) }
  return (
    <div>
      <h1 className="hello">To do list</h1>
      <TodoList todos={ todos } handleClick={ handleClick } />
    </div>
  )
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired
}

export default App
