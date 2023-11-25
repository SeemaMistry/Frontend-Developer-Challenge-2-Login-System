import axios from 'axios'
import Cookies from 'js-cookie'
import { load_user } from './profile'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL
} from './types'

export const register = (first_name, last_name, username, password, re_password, email, user_type, language) => async dispatch => {
    // register success and fail
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({first_name, last_name, username, password, re_password, email, user_type, language})
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, body, config)

        if (res.data.error) {
            dispatch({
                type:REGISTER_FAIL
            })
        } else {
            dispatch({
                type:REGISTER_SUCCESS
            })
        }
    } catch (err) {

    }
}

export const checkAuthenticated = () => async dispatch => {
    // checkAuthenticated success and fail
}

export const login = (login_input, password) => async dispatch => {
    // login success and fail
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const body = JSON.stringify({login_input, password})
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, body, config)
        
        if (res.data.error) {
            dispatch({
                type: LOGIN_FAIL
            })
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
            })
            // TODO: load the user data
            dispatch(load_user())
        }
    
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
   
}

export const logout = () => async dispatch => {
    // logout success and fail
}
