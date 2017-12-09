import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Provider, Fixed } from 'rebass'
import Home from './Home'
import Chat from './Chat'
import Location from './Location'
import Profile from './Profile'
import Report from './Report'

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Fixed right top>
              <Link to="/profile">Profile</Link>
            </Fixed>
            <Route exact path="/" component={Home}/>
            <Route exact path="/chat" component={Chat}/>
            <Route exact path="/location" component={Location}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/report" component={Report}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
