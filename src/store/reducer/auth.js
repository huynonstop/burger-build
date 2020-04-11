import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    redirectPath: "/"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.AUTH_START:
            return updateObj(state,{error: null, loading: true})
        case actionTypes.AUTH_FAILED:
            return updateObj(state, { error: payload.error, loading: false})
        case actionTypes.AUTH_SUCCESS:
            return updateObj(state, {
                error: null,
                loading: false,
                token: payload.authData.idToken,
                userId: payload.authData.localId,
            })
        case actionTypes.AUTH_LOGOUT:
            return updateObj(state, {
                token: null,
                userId: null
            })
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return updateObj(state,{redirectPath: payload.path})
        default:
            return state
    }
}
