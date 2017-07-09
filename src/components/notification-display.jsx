import * as React from 'react'
import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

export class NotificationDisplay extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      notification: ''
    }
  }

  componentWillMount() {
    messaging.onMessage(payload => {
      console.log('Received message. payload:', payload)
      this.setState({
        notification: payload.notification.body
      })
    })
  }

  render() {
    return null
  }
}