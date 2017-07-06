import {combineReducers} from 'redux'
import {firebaseStateReducer} from 'react-redux-firebase'

export const reducer = combineReducers({
  firebase: firebaseStateReducer
})