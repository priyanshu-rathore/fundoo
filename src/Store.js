import {createStore} from 'redux'
import {combineReducers} from 'redux'
import navReducer from './Reducers/NavReducer'


const mainReducer= combineReducers({
    navReducer
})

const store=createStore(mainReducer)

export default store