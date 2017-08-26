import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './firebase-init'
import {store} from './store'
import {App} from './components/app'
import {HttpsRedirect} from './components/misc/https-redirect'
import {RegSW} from './components/misc/reg-sw'

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
