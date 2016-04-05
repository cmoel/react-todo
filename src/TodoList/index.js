import React, { PropTypes }             from "react"
import { connect }                      from "react-redux"

import TodoListItem                     from "../TodoListItem"

const TodoList = ({ todos }) => {
  const { data } = todos
  return (
    data.length > 0
    ? <ul>
        { data.map((todo, i) => {
          return <TodoListItem key={`todo-${todo.id}`} {...todo} />
        }) }
      </ul>
    : <noscript />
  )
}

const TodoShape = PropTypes.shape({
  id: PropTypes.number,
  text: PropTypes.string,
})

TodoList.propTypes = {
  todos: PropTypes.shape({
    data: PropTypes.arrayOf( TodoShape ).isRequired
  })
}

function mapStateToProps(state) {
  const { todos } = state
  return {
    todos
  }
}

export default connect(mapStateToProps)(TodoList)
