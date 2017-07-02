import * as React from 'react'

function isSupported() {
  return window.PushManager && navigator.serviceWorker && Notification
}

export class NotifySettings extends React.PureComponent {
  constructor() {
    super(...arguments)
    this.state = {
      supported: isSupported(),
      permission: Notification.permission
    }
  }

  requestPermission = async () => {
    const result = await Notification.requestPermission()
    this.setState({
      permission: result
    })
  }

  render() {
    const {supported, permission} = this.state
    if (!supported) {
      return <span>Push notification is not supported.</span>
    }
    if (permission === 'denied') {
      return <span>Notification is denied. Check <a href="https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en">this</a> to enable it</span>
    }
    if (permission === 'default') {
      return <button onClick={this.requestPermission}>Enable Notification</button>
    }

    return null
  }
}