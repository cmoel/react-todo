import { initialTodos }       from "../store"

function todos(state = initialTodos(), action) {
  const { type, payload } = action
  const { data, nextId } = state
  switch (type) {

    case "ADD_TODO":
      const { todoBody } = payload
      const newData = [
        ...data,
        { text: todoBody, id: nextId }
      ]
      return {
        data: newData,
        nextId: nextId + 1
      }

    case "DELETE_TODO":
      const { todoId } = payload
      return {
        nextId,
        data: data.filter((todo) => todo.id !== todoId)
      }

    default:
      return state

  }
}

export default todos
