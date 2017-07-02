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
    }
  }

  render() {
    const {supported, permission, error} = this.state
    if (!supported) {
      return <span>Push notification is not supported.</span>
    }
    if (permission === 'denied') {
      return <span>Notification is denied. Check <a href="https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en">this</a> to enable it</span>
    }
    if (permission === 'default') {
      return <button onClick={this.requestPermission}>Enable Notification</button>
    }
    if (error) {
      return <span>{error}</span>
    }

    return null
  }
}