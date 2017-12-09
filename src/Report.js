import React, { Component } from 'react'
import { Text, Textarea, Label, Checkbox, Flex, Button, ButtonTransparent } from 'rebass'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 32px;
`

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goToChat: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      goToChat: true
    })
  }
  render() {
    if (this.state.goToChat) {
      return (<Redirect to={{pathname: '/chat'}} />)
    }
    return (
      <Wrapper>
        <Text mb={3}>Do what you do best...</Text>
        <Textarea rows={4} placeholder="Complain away!" />
        <Label my={2}><Checkbox defaultChecked />Share to Facebook</Label>
        <Label><Checkbox defaultChecked />Share to Twitter</Label>
        <Flex justify="space-between">
          <ButtonTransparent onClick={this.handleClick}>Skip this step</ButtonTransparent>
          <Button onClick={this.handleClick}>Post</Button>
        </Flex>
      </Wrapper>
    )
  }
}

export default Report