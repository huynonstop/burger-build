import { put, delay} from 'redux-saga/effects'
import { authAction } from '../actions/index'
import axios from 'axios'

export function* logoutSaga(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("expiresDate")
    yield localStorage.removeItem("userId")
    yield put(authAction.didLogout())
}

export function* authTimeoutSaga(action) {
    yield delay(action.payload.expirationTime * 1000)
    yield put(authAction.logout())
}

export function* authSaga(action) {
    const {email,password,isSignUp} = action.payload
    yield put(authAction.authStart())
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    const key = "AIzaSyAYnIufml7g4MTlgwR4ZCZb5ToLUcpUSzQ"
    let url = isSignUp ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
    try {
        const res = yield axios.post(url, authData)
        const expiresDate = yield new Date(new Date().getTime() + res.data.expiresIn * 1000)
        yield localStorage.setItem('token', res.data.idToken)
        yield localStorage.setItem('userId', res.data.localId)
        yield localStorage.setItem('expiresDate', expiresDate)
        yield put(authAction.authSuccess(res.data))
        yield put(authAction.authTimeout(res.data.expiresIn))
    } catch(err) {
        yield put(authAction.authFail(err.response.data.error))
    }
}

export function* authCheckSaga(action) {
    const token = yield localStorage.getItem('token')
    if (!token) {
        yield put(authAction.logout())
    } else {
        const expiresDate = yield new Date(localStorage.getItem('expiresDate'))
        if (expiresDate <= new Date()) {
            yield put(authAction.logout())
        } else {
            const userId = yield localStorage.getItem('userId')
            yield put(authAction.authSuccess({
                idToken: token,
                localId: userId
            }))
            yield put(authAction.authTimeout((expiresDate.getTime() - new Date().getTime()) / 1000))
        }
    }
}