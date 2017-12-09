import React, { Component } from 'react'
import { Text, Border, Small } from 'rebass'

class Report extends Component {
  render() {
    return (
      <Border m={4} p={2} top bottom left right borderWidth="2">
        <Text>MRT Breakdown Report</Text>
        <Text>No train service between #BoonLay and #Pasir Ris</Text>
        <Small>Elephant Rampage</Small>
      </Border>
    )
  }
}

export default Report