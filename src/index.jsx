import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import './firebase-init'
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

const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)

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
