import axios from "axios";
import Cookies from "js-cookie";
import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL
} from './types'

export const load_user = (first_name, last_name, username, password, re_password, email, user_type, language) => async dispatch => {
    // load user success and fail
}