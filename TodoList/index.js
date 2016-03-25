import React, { PropTypes }             from "react"
import { connect }                      from "react-redux"

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

function mapStateToProps(state) {
  const { todos } = state
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList)
