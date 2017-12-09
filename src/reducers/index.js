import { combineReducers } from 'redux'
import user from './user'

const trainApp = combineReducers({
  user,
})

export default trainApp