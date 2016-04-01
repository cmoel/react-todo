import { createStore, applyMiddleware }               from "redux"
import thunk                                          from "redux-thunk"
import { defaultTo }                                  from "ramda"

import reducer                                        from "../reducers"
import * as Storage                                   from "../utils/storage"

export function initialTodos() {
  const initialTodos = {
    data: [],
    nextId: 1
  }

  const defaultToInitialTodos = defaultTo(initialTodos)
  return defaultToInitialTodos(Storage.get("todos"))
}

const persistTodos = store => next => action => {
  setTimeout(() => { Storage.set("todos", store.getState().todos) })
  return next(action)
}

export function configureStore() {
  const initialState = {
    todos: initialTodos()
  }

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, persistTodos)
  )

  return store
}
