import React             from "react"

const TodoListItem = ({ id, text, clicker }) => {
  return (
    <li
      onClick={() => { clicker(text) }}
    >{text}</li>
  )
}

export default TodoListItem
