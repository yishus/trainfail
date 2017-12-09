import React, { Component } from 'react'
import { Heading } from 'rebass'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => {
      return {counter: prevState.counter + 1}
    })
  }

  render() {
    const hours = Math.floor(this.state.counter / 3600)
    const minutesLeft = this.state.counter - hours*3600
    const minutes = Math.floor(minutesLeft / 60)
    const seconds = minutesLeft - minutes*60

    const hString = hours < 10 ? `0${hours}` : `${hours}`
    const minString = minutes < 10 ? `0${minutes}` : `${minutes}`
    const sString = seconds < 10 ? `0${seconds}` : `${seconds}`
    return (
      <Heading center>{hString}:{minString}:{sString}</Heading>
    )
  }
}

export default Timer