import React, { Component } from 'react'
import { Flex, Text, Heading, Button } from 'rebass'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import getNearestMrt from 'nearest-mrt'

const Wrapper = styled(Flex)`
  padding: 32px;
`

const LocationImg = styled.img`
  margin-top: 20px;
`

const CustomText = styled(Heading)`
  font-size: 20px;
  letter-spacing: 0.5px;
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
      return (<Redirect to={{pathname: '/report'}} />)
    }
    return (
      <Wrapper column align="center">
        <Text my={2} center>Are you stuck at</Text>
        <LocationImg src={ require('./images/location.png') } />
        {!this.state.station && <Heading my={3} center>...</Heading>}
        {this.state.station && <CustomText my={3} center>{this.state.station}</CustomText>}
        <Flex justify="center">
          <Button mx={2} onClick={this.handleYesClick}>Yes!</Button>
          <Button mx={2} onClick={this.handleNoClick}>Nope!</Button>
        </Flex>
      </Wrapper>
    )
  }
}

export default Location
