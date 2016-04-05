import React, { Component, PropTypes }      from "react"
import { connect }                          from "react-redux"

import { addTodo }                          from "../actions"

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ""
    }
    this.submitTodo = this.submitTodo.bind(this)
  }

  submitTodo(e) {
    e.preventDefault()
    const { dispatch } = this.props
    const { body } = this.state
    this.setState({ body: "" })
    dispatch(addTodo(body))
  }

  render() {
    const { body } = this.state
    return (
      <form onSubmit={ this.submitTodo }>
        <label htmlFor="new-todo">New Todo</label>
        <input
          id="new-todo"
          type="text"
          value={body}
          onInput={ e => this.setState({ body: e.target.value }) }
        />
        <button
          type="submit"
        >Add</button>
      </form>
    )
  }
}

export default connect()(TodoForm)
