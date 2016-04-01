import { initialTodos }       from "./store"

export function initTodos() {
  return {
    type: "INIT_TODOS",
    payload: {
      todos: initialTodos()
    }
  }
}

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
