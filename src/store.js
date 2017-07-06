import {applyMiddleware, compose, createStore} from 'redux'
import {config as firebaseInitCfg} from './firebase-init'
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
  enableLogging: true
}

export const store = compose(
  reactReduxFirebase(firebaseInitCfg, firebaseConfig),
  applyMiddleware(...middlewares)
)(createStore)(reducer)