import {combineReducers} from 'redux'
import auth from './profile'
import profile from './auth'

export default combineReducers({
    auth,
    profile
})