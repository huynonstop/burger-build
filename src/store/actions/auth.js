import * as actionTypes from "./actionTypes"
import axios from 'axios'

export const authStart = () => ({
    type: actionTypes.AUTH_START
})

export const authSuccess = (authData) => ({
    type: actionTypes.AUTH_SUCCESS,
    payload: {
        authData: authData
    }
})

export const authFail = (err) => ({
    type: actionTypes.AUTH_FAILED,
    payload: {
        error: err
    }
})

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("expiresDate")
    localStorage.removeItem("userId")
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expirationTime * 1000)
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        const key = "AIzaSyAYnIufml7g4MTlgwR4ZCZb5ToLUcpUSzQ"
        let url = isSignUp ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
            : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
        axios.post(url, authData)
            .then(res => {
                const expiresDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('userId', res.data.localId)
                localStorage.setItem('expiresDate', expiresDate)
                dispatch(authSuccess(res.data))
                dispatch(authTimeout(res.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error))
            })
    }
} 

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    payload: {
        path: path
    }
})

export const authCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token) {
            dispatch(logout())
        } else {
            const expiresDate = new Date(localStorage.getItem('expiresDate'))
            if(expiresDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess({
                    idToken: token,
                    localId: userId
                }))
                dispatch(authTimeout((expiresDate.getTime() - new Date().getTime())/1000))
            }
        }
    }
}