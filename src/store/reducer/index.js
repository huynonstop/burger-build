import burgerBuilder from './burgerBuilder'
import order from './order'
import auth from './auth'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilder,
    order: order,
    auth: auth
})

export default rootReducer