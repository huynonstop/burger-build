import * as actionTypes from "./actionTypes"

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_SAGA
    }
}
export const didLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_TIMEOUT_SAGA,
        payload: {
            expirationTime
        }
    }
}


export const authStart = () => ({
    type: actionTypes.AUTH_START
})

export const authSuccess = (authData) => ({
    type: actionTypes.AUTH_SUCCESS,
    payload: {
        authData
    }
})

export const authFail = (err) => ({
    type: actionTypes.AUTH_FAILED,
    payload: {
        error: err
    }
})

export const auth = (email, password, isSignUp) => {
    return {
        type: actionTypes.AUTH_USER_SAGA,
        payload: {
            email,
            password,
            isSignUp
        }
    }
} 

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    payload: {
        path
    }
})

export const authCheck = () => {
    return {
        type: actionTypes.AUTH_CHECK_SAGA
    }
}