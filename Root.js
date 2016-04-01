import React, { Component, PropTypes }                     from "react"
import { Provider, connect }                               from "react-redux"

import App                                                 from "./App"
import { initTodos }                                       from "./actions"

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initTodos())
  }

  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default connect()(Root)
