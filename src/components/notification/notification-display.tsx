import * as React from 'react'
import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

interface INotificationDisplayState {
  message: string
}

export class NotificationDisplay extends React.Component {
  public state: INotificationDisplayState = {
    message: ''
  }

  public componentWillMount() {
    messaging.onMessage((payload: any) => {
      console.log('Received message. payload:', payload)
      this.setState({
        message: payload.notification.body
      })
    })
  }

  public render() {
    const {message} = this.state
    return <div>Notification message: {message}</div>
  }
}
