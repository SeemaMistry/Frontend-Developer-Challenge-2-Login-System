import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL
} from '../actions/types'

const initalState = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    user_type: '',
    language: ''
}

export default function(state=initalState, action) {
    const {type, payload} = action
    switch(type){
        case LOAD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name,
                username: payload.profile.username,
                email: payload.profile.email,
                user_type: payload.profile.user_type,
                language: payload.profile.language
            }
            
        case LOAD_USER_PROFILE_FAIL:
        default:
            return {
                ...state,
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                user_type: '',
                language: ''
            }
    }
}