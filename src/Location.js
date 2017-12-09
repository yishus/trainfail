import React, { Component } from 'react'
import { Flex, Text, Heading, Button } from 'rebass'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import getNearestMrt from 'nearest-mrt'

const Wrapper = styled(Flex)`
  padding: 32px;
`

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      station: null,
      goToChat: false
    }
    this.success = this.success.bind(this)
    this.handleNoClick = this.handleNoClick.bind(this)
    this.handleYesClick = this.handleYesClick.bind(this)
    this.stations = []
    this.stationPointer = 0
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success)
  }

  success(pos) {
    const crd = pos.coords
    const target = [crd.longitude, crd.latitude]

    const nearestMRT = getNearestMrt(target, false, 2000)
    if (nearestMRT.result.length > 0) {
      this.stations = nearestMRT.result
      this.setState({
        station: this.stations[this.stationPointer].station.name
      })
    }
  }

  handleYesClick() {
    this.setState({ goToChat: true })
  }
  
  handleNoClick() {
    this.stationPointer++
    if (this.stations[this.stationPointer] !== undefined) {
      this.setState({
        station: this.stations[this.stationPointer].station.name
      })
    }
  }

  render() {
    if (this.state.goToChat) {
      return (<Redirect to={{pathname: '/chat'}} />)
    }
    return (
      <Wrapper column align="center">
        <Text my={2} center>Are you at</Text>
        {!this.state.station && <Heading my={3} center>...</Heading>}
        {this.state.station && <Heading my={3} center>{this.state.station}</Heading>}
        <Flex justify="center">
          <Button mx={2} onClick={this.handleYesClick}>Yes! How do you know though</Button>
          <Button mx={2} onClick={this.handleNoClick}>Nope! Guess again</Button>
        </Flex>
      </Wrapper>
    )
  }
}

export default Location
