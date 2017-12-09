import React, { Component } from 'react'
import { Flex, Heading, Text, Input, Button } from 'rebass'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { setUsername } from './actions'
import Status from './Status'
import bgImage from './images/trainfail-bg.jpg';

const StyledFlex = styled(Flex)`
  padding: 32px;
  height: 100vh;
  line-height: 1.5;
  background-image: url(${bgImage});
`

const LogoImg = styled.img`
  margin-bottom: 20px;
`

const CustomInput = styled(Input)`
  border: solid 1px #333;
  margin: 24px auto;
  max-width: 300px;
  display: block;
  background: rgba(255,255,255,.5);
`

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {name: '', goToLocation: false}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  handleClick() {
    this.props.dispatch(setUsername(this.state.name))
    this.setState({ goToLocation: true })
  }

  render() {
    if (this.state.goToLocation) {
      return (<Redirect to={{pathname: '/location'}} />)
    }
    return (
      <StyledFlex align='center' column>
        <Status />
        <LogoImg src={ require('./images/logo.png') } />
        <Heading center>#Trainfail</Heading>
        <Text center>Alamak, train breakdown again??</Text>
        <Text center>Login to complain!</Text>
        <CustomInput onChange={this.handleChange} placeholder='How do we call you?' value={this.state.name} />
        <Button center onClick={this.handleClick}>Let Me Out</Button>
      </StyledFlex>
    )
  }
}

const HomeWithStore = connect()(Home)

export default HomeWithStore
