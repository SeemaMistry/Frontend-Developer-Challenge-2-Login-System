import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL
} from '../actions/types'

initalState = {
    isAuthenticated: null
}

export default function (state=initalState, action){
    const {type, payload} = action
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        
        case LOGIN_FAIL:
        default:
            return state
    }
}