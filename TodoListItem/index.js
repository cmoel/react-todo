import React             from "react"
import { connect }       from "react-redux"

import { deleteTodo }    from "../actions"

import "./index.css"

const TodoListItem = ({ id, text, dispatch }) => {
  return (
    <li
      className="TodoListItem"
      onClick={ () => dispatch(deleteTodo(id)) }
    >{text}</li>
  )
}

export default connect()(TodoListItem)
