import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {config as firebaseInitCfg} from './firebase-init'
import {reactReduxFirebase} from 'react-redux-firebase'
import {reducer} from './reducer/index'
import {App} from './components/app'
import {HttpsRedirect} from './components/https-redirect'
import {RegSW} from './components/reg-sw'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const {createLogger} = require('redux-logger')
  const logger = createLogger({
    collapsed: true
  })
  middlewares.push(logger)
}

const firebaseConfig = {
  enableLogging: true
}

const store = compose(
  reactReduxFirebase(firebaseInitCfg, firebaseConfig),
  applyMiddleware(...middlewares)
)(createStore)(reducer)

function Root() {
  return (
    <Provider store={store}>
      <div>
        <App />
        <HttpsRedirect />
        <RegSW />
      </div>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.querySelector('.root'))
