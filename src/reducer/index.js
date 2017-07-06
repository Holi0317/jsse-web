import {combineReducers} from 'redux'
import {firebaseStateReducer} from 'react-redux-firebase'
import {sw} from './sw'

export const reducer = combineReducers({
  firebase: firebaseStateReducer,
  sw
})