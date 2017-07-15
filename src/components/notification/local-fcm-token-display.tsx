import * as React from 'react'
import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

interface ILocalFcmTokenDisplayState {
  token: string | null
}

export class LocalFcmTokenDisplay extends React.Component {
  public state: ILocalFcmTokenDisplayState = {
    token: null
  }

  public async componentWillMount() {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.ready
      const token = await messaging.getToken()
      this.setState({
        token: token ? token.slice(0, 10) + '...' : ''
      })
    }
  }

  public render() {
    const {token} = this.state
    if (!token) {
      return <div>Loading local FCM Token.</div>
    }
    return <div>Local FCM Token: {token}</div>
  }
}
