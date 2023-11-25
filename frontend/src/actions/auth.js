import axios from 'axios'
import Cookies from 'js-cookie'
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
}

export const checkAuthenticated = () => async dispatch => {
    // checkAuthenticated success and fail
}

export const login = (login_input, password) => async dispatch => {
    // login success and fail
}

export const logout = () => async dispatch => {
    // logout success and fail
}
