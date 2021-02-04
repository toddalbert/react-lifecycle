import React, { Component } from 'react'

class Dummy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log('MOUNTED!')
  }
  componentDidUpdate() {
    console.log('Updated with new state', this.state.counter)
  }
  render() {
    const { counter } = this.state
    return (
      <>
        <h1>Hello React Peeps!</h1>
        <button onClick={() => {
          this.setState({ counter: counter + 1 })
        }}>Click Me</button>
        <h2>{counter}</h2>
      </>
    )
  }
}

export default Dummy