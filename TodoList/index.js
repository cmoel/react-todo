import React, { PropTypes }             from "react"

import TodoListItem                     from "../TodoListItem"

const TodoList = ({ todos }) => {
  return (
    todos.length > 0
    ? <ul>
        { todos.map((todo, i) => {
          return <TodoListItem key={`todo-${todo.id}`} {...todo} />
        }) }
      </ul>
    : <noscript />
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired
}

export default TodoList
