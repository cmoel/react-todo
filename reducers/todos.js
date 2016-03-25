function todos(state = [], action) {
  const { type, payload } = action
  switch (type) {

    case "DELETE_TODO":
      const { todoId } = payload
      return state.filter((todo) => todo.id !== todoId)

    default:
      return state

  }
}

export default todos
