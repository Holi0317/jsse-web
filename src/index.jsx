import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store'
import {App} from './components/app'
import {HttpsRedirect} from './components/misc/https-redirect'
import {RegSW} from './components/misc/reg-sw'

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
