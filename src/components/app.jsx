import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {Webcam} from './webcam'
import {Status} from './status'
import {Log} from './log'
import {NotifySettings} from './notify-settings'
import {Login} from './auth/login'
import {Logout} from './auth/logout'
import {authSelector} from '../selectors/auth'

@firebaseConnect()
@connect(state => ({
  auth: authSelector(state)
}))
export class App extends React.Component {
  render() {
    const {auth} = this.props
    if (auth.isEmpty) {
      return (
        <div>
          <h1>JSSE PH23 smart mail box</h1>
          <h3>Authentication</h3>
          <Login />
        </div>
      )
    } else {
      return (
        <div>
          <h1>JSSE PH23 smart mail box</h1>
          <h3>Webcam footage</h3>
          <Webcam />
          <h3>Current status</h3>
          <Status />
          <h3>Mail Log</h3>
          <Log />
          <h3>Notification settings</h3>
          <NotifySettings />
          <h3>Authentication</h3>
          <Logout />
        </div>
      )
    }

  }
}
