import * as React from 'react'
import * as firebase from 'firebase/app'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
const messaging = firebase.messaging()

export class RegSW extends React.Component {
  public async componentWillMount() {
    if ('serviceWorker' in navigator) {
      const registration = await runtime.register()
      messaging.useServiceWorker(registration)
    }
  }

  public shouldComponentUpdate() {
    return false
  }

  public render() {
    return null
  }
}
