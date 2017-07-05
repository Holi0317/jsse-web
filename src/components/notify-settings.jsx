import * as React from 'react'
import {requestMessagingPermission} from '../request-messaging-permission'
import connect from 'react-redux/es/connect/connect'
import {sw} from '../selectors/sw'

function isSupported() {
  return window.PushManager && navigator.serviceWorker && Notification
}

class DisconNotifySettings extends React.PureComponent {
  constructor() {
    super(...arguments)
    const {sw} = this.props
    this.state = {
      supported: isSupported(),
      permission: Notification.permission,
      ready: !!sw,
      error: null
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.sw) {
      this.setState({
        ready: true
      })
    }
  }

  requestPermission = async () => {
    const {sw} = this.props
    try {
      await requestMessagingPermission(sw)
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
    const {supported, ready, permission, error} = this.state
    if (!supported) {
      return <span>Push notification is not supported.</span>
    }
    if (!ready) {
      return <span>Service worker is registering. Please wait.</span>
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

const mapStateToProps = state => ({
  sw: sw(state)
})

export const NotifySettings = connect(mapStateToProps)(DisconNotifySettings)
