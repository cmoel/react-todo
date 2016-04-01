import { createStore, applyMiddleware }               from "redux"
import thunk                                          from "redux-thunk"
import { defaultTo }                                  from "ramda"

import reducer                                        from "../reducers"
import * as Storage                                   from "../utils/storage"

export function initialTodos() {
  const initialTodos = []

  const defaultToInitialTodos = defaultTo(initialTodos)
  return defaultToInitialTodos(Storage.get("todos"))
}

export function configureStore() {
  const initialState = {
    todos: initialTodos()
  }

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )

  return store
}
