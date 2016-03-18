import React             from "react"

import "./index.css"

const TodoListItem = ({ id, text, clicker }) => {
  return (
    <li
      className="TodoListItem"
      onClick={() => { clicker(text) }}
    >{text}</li>
  )
}

export default TodoListItem
