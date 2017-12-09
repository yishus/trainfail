import React, { Component } from 'react'
import { Heading } from 'rebass'
import Timer from './Timer'

class Chat extends Component {
  render() {
    return (
      <div>
        <Heading center>You have been trapped for</Heading>
        <Timer />
      </div>
    )
  }
}

export default Chat
