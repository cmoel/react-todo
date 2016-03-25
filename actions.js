export function addTodo(todoBody) {
  return {
    type: "ADD_TODO",
    payload: {
      todoBody
    }
  }
}

export function deleteTodo(todoId) {
  return {
    type: "DELETE_TODO",
    payload: {
      todoId
    }
  }
}
