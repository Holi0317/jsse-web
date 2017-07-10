import {applyMiddleware, compose, createStore} from 'redux'
import * as firebase from 'firebase/app'
import {reducer} from './reducer'
import {reactReduxFirebase} from 'react-redux-firebase'

const middlewares = []

// Redux-logger plugin
if (process.env.NODE_ENV === 'development') {
  const {createLogger} = require('redux-logger')
  const logger = createLogger({
    collapsed: true
  })
  middlewares.push(logger)
}

// Firebase plugin
const firebaseConfig = {
  enableLogging: true,
  userProfile: 'users'
}

export const store = compose(
  reactReduxFirebase(firebase, firebaseConfig),
  applyMiddleware(...middlewares)
)(createStore)(reducer)
