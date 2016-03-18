import React, { Component }             from "react"

import TodoListItem from "../TodoListItem"

const TodoList = ({ todos, handleClick }) => {
  return(
    todos.length > 0
    ? <ul>
        { todos.map((todo, i) => {
          return <TodoListItem key={`todo-${todo.id}`} clicker={handleClick} {...todo} />
        }) }
      </ul>
    : <noscript />
  )
}

export default TodoList
