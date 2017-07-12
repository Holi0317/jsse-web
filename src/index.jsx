import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './firebase-init'
import {store} from './store'
import {App} from './components/app'
import {HttpsRedirect} from './components/misc/https-redirect'
import {RegSW} from './components/misc/reg-sw'

injectTapEventPlugin()

function Root() {
  return (
    <Provider store={store}>
      <div>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
        <HttpsRedirect />
        <RegSW />
      </div>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.querySelector('.root'))
