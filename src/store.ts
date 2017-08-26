import {applyMiddleware, createStore} from 'redux'
import flowRight from 'lodash-es/flowRight'
import * as firebase from 'firebase/app'
import {reducer} from './reducer'
import {reactReduxFirebase} from 'react-redux-firebase'

const middlewares = []

// Redux-logger plugin
if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  const {createLogger} = require('redux-logger')
  const logger = createLogger({
    collapsed: true
  })
  middlewares.push(logger)
}

// Firebase plugin
const firebaseConfig = {
  enableLogging: process.env.NODE_ENV === 'development',
  userProfile: 'users'
}

export const store = flowRight(
  (reactReduxFirebase as any)(firebase, firebaseConfig),
  applyMiddleware(...middlewares)
)(createStore)(reducer)
