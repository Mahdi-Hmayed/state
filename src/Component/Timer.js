import React, { Component } from 'react'


class Timer extends Component {
  state = {
      count: 1
    }
  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Current Count: {count}</h1>
      </div>
    )
  }
  componentDidMount () {
    this.setState({
      count: 1
    })
    this.doIntervalChange()
  }
  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}
export default Timer