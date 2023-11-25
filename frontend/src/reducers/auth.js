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

const initalState = {
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
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        default:
            return state
    }
}