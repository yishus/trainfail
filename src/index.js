import React from 'react'
import {render} from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import trainApp from './reducers'
import App from './App'

let store = createStore(trainApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
