import { CLEAR_TOKEN, GET_USERS, GET_USER, SET_TOKEN } from "../actions/types"

const defaultState = {
    token: null
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case CLEAR_TOKEN:
            return defaultState
        default: return state
    }
}

export default userReducer