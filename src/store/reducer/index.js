import burgerBuilder from './burgerBuilder'
import order from './order'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilder,
    order: order
})

export default rootReducer