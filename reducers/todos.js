function todos(state = [], action) {
  const { type, payload } = action
  switch (type) {

    case "ADD_TODO":
      const { todoBody } = payload
      return [
        ...state,
        { text: todoBody, id: (state.length + 1) }
      ]

    case "DELETE_TODO":
      const { todoId } = payload
      return state.filter((todo) => todo.id !== todoId)

    default:
      return state

  }
}

export default todos
