import React, { Component } from 'react'
import { Heading } from 'rebass'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const { username } = this.props
    return (
      <div>
        <Heading>Hi there {username}!</Heading>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Profile)
