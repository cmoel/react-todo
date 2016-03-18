import React                 from "react"
import { render }            from "react-dom"

import App                   from "./App"

const todos = [
  { id: 1, text: "First" },
  { id: 2, text: "second" },
]

render(
  <App todos={ todos } />,
  document.getElementById("root")
)
