import React, { Component } from 'react'
import { Heading } from 'rebass'
import Timer from './Timer'
import styled from 'styled-components'

const StyledMain = styled.main`
  height: 100vh;
  background: #F7F7F9;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 200px;
    display: block;
    /* Gradient: */
    background-image: linear-gradient(-180deg, #4776E6 0%, #8E54E9 100%);
  }
`

const StyledFlex = styled.div`
  width: 90%;
  padding: 20px;

  background: #FFFFFF;
  box-shadow: 0 5px 15px 0 rgba(89,51,142,0.15);
  border-radius: 10px;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  hr {
    width: 80%;
    margin: 20px auto;
    border: 1px solid rgba(0,0,0,0.1);
  }
`

const StyledDiv = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 40px;
`

const CustomText = styled(Heading)`
  color: white;
  font-weight: 500;
  letter-spacing: .5px;
`

const CustomText2 = styled(Heading)`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.5;
`

const BadgesBox = styled.div`
  margin-top: 320px;
  padding: 0 30px;
`

const Badges = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;

  img {
    height: 150px;
    width: 150px;
  }
`

class Chat extends Component {
  render() {
    return (
      <StyledMain>
        <StyledDiv>
          <CustomText center>Train Status</CustomText>
          <StyledFlex>
            <CustomText2 center>The train is stil stuck, hang in there!</CustomText2>
            <hr/>
            <CustomText2 center>You have been stuck for</CustomText2>
            <Timer />
            <CustomText2 center>Unlocking a badge soon...</CustomText2>
          </StyledFlex>
          <BadgesBox>
            <p>Current Badges</p>
            <Badges>
              <img src={ require('./images/5min.png') } />
              <img src={ require('./images/10min.png') } />
              <img src={ require('./images/15min.png') } />
              <img src={ require('./images/30min.png') } />
              <img src={ require('./images/45min.png') } />
              <img src={ require('./images/1hour.png') } />
              <img src={ require('./images/1hour30min.png') } />
              <img src={ require('./images/2hour.png') } />
            </Badges>
          </BadgesBox>
        </StyledDiv>
      </StyledMain>
    )
  }
}

export default Chat
