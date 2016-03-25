export function deleteTodo(todoId) {
  return {
    type: "DELETE_TODO",
    payload: {
      todoId
    }
  }
}
