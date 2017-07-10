import * as React from 'react'
import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

export class NotificationDisplay extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      message: ''
    }
  }

  componentWillMount() {
    messaging.onMessage(payload => {
      console.log('Received message. payload:', payload)
      this.setState({
        message: payload.notification.body
      })
    })
  }

  render() {
    const {message} = this.state
    return <div>Notification message: {message}</div>
  }
}
