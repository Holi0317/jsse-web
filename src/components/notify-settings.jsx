import * as React from 'react'
import {requestMessagingPermission} from '../request-messaging-permission'

function isSupported() {
  return window.PushManager && navigator.serviceWorker && Notification
}

export class NotifySettings extends React.PureComponent {
  constructor() {
    super(...arguments)
    this.state = {
      supported: isSupported(),
      permission: Notification.permission,
      error: null
    }
  }

  requestPermission = async () => {
    try {
      await requestMessagingPermission()
    } catch (e) {
      console.log('Error when requesting permission.', e)
      this.setState({
        permission: Notification.permission,
        error: 'Error when requesting permission. See log for details.'
      })
      throw e
    }
  }

  render() {
    const {supported, permission, error} = this.state
    if (!supported) {
      return <span>Push notification is not supported.</span>
    }
    return (
      <div>
        <div>Notification status: {permission}</div>
        <button onClick={this.requestPermission}>Register Notification</button>
        <div>Error: {error}</div>
      </div>
    )
  }
}