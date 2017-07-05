import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import './firebase-init'
import {reducer} from './reducer/index'
import {App} from './components/app'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

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
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.querySelector('.root'))

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
  console.log(registration)
}
