
import Backend from "../apis/Backend"
import { CLEAR_TOKEN, GET_USER, GET_USERS, SET_TOKEN } from "./types"


// Methods
export const loginUser = () => dispatch => {
    window.location.href = "/api/accounts/login" // TODO: Put in some constant place
}

export const setToken = (token) => async dispatch => {
    try {
        await Backend.get("/profile/", { 
            headers: { "Authorization": `JWT ${token}` } 
        })
        localStorage.setItem("token", token)
        dispatch({
            type: SET_TOKEN,
            payload: {
                token: token,
            }
        })
    } catch(e) {
        console.log("Token is invalid!")
        dispatch({
            type: SET_TOKEN,
            payload: {
                token: null
            }
        })
    }
}

export const checkToken = (token) => async dispatch => {
    let token = localStorage.getItem("token")
    if (token) {
        try {
            await Backend.get("/profile/", {
                headers: { "Authorization": `JWT ${token}` }
            })
            dispatch({
                type: SET_TOKEN,
                payload: {
                    token: token
                }
            })
        } catch(e) {
            console.log("Token was rejected!")
        }
    }
}

export const logoutUser = (token) => dispatch => {
    localStorage.clear()
    dispatch({
        type: CLEAR_TOKEN,
        payload: {}
    })
}

export const getUsers = (token) => async dispatch => {
    if (token) {
        const response = await Backend.get("/users/", { 
            headers: { "Authorization": `JWT ${token}` } 
        })
        dispatch({
            type: GET_USERS,
            payload: {
                users: response.data.results
            }
        })
    }
}

export const getUser = (token) => async dispatch => {
    if (token) {
        const response = await Backend.get("/profile/", { 
            headers: { "Authorization": `JWT ${token}` } 
        })
        dispatch({
            type: GET_USER,
            payload: {
                user: response.data
            }
        })
    }
} 
