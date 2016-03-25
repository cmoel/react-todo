import React, { PropTypes }                                from "react"

import App                                                 from "./App"

const Root = ({ store }) => {
  const { todos } = store.getState()
  return (
    <App todos={todos} />
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
