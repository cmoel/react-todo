import React                 from "react"
import { render }            from "react-dom"

import { configureStore }    from "./store"
import Root                  from "./Root"

const todos = [
  { id: 1, text: "First" },
  { id: 2, text: "second" },
]

const store = configureStore({ todos })

render(
  <Root store={store} />,
  document.getElementById("root")
)
