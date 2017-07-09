import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import {requestMessagingPermission} from '../request-messaging-permission'
import connect from 'react-redux/es/connect/connect'
import {authSelector} from '../selectors/auth'
import {uidSelector} from '../selectors/uid'
import {fcmTokenSelector} from '../selectors/fcm-token'
import {TokenRefresher} from './token-refresher'

const isSupported = window.PushManager && navigator.serviceWorker && Notification

const mapStateToProps = state => ({
  auth: authSelector(state),
  uid: uidSelector(state),
  fcmToken: fcmTokenSelector(state)
})

@firebaseConnect()
@connect(mapStateToProps)
export class NotifySettings extends React.PureComponent {
  constructor() {
    super(...arguments)
    this.state = {
      permission: Notification.permission,
      error: null
    }
  }

  requestPermission = async () => {
    const {uid, firebase} = this.props
    try {
      await requestMessagingPermission(uid, firebase.set)
    } catch (e) {
      console.log('Error when requesting permission.', e)
      this.setState({
        permission: Notification.permission,
        error: e.message
      })
      throw e
    }
  }

  render() {
    const {fcmToken} = this.props
    const {permission, error} = this.state
    if (!isSupported) {
      return <span>Push notification is not supported.</span>
    }
    return (
      <div>
        <div>Notification status: {permission}</div>
        <div>FCM Token: {fcmToken}</div>
        <button onClick={this.requestPermission}>Register Notification</button>
        <div>Error: {error}</div>
        <TokenRefresher />
      </div>
    )
  }
}
