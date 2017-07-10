import {combineReducers} from 'redux'
import {firebaseStateReducer} from 'react-redux-firebase'
import {footage} from './footage'

export const reducer = combineReducers({
  firebase: firebaseStateReducer,
  footage
})
