import * as React from 'react'
import * as firebase from 'firebase/app'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
const messaging = firebase.messaging()

export class RegSW extends React.Component {
  async componentWillMount() {
    if ('serviceWorker' in navigator) {
      const registration = runtime.register()
      const reg = await registration
      messaging.useServiceWorker(reg)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}
