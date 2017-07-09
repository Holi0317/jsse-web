import * as React from 'react'

export class ResetServiceWorker extends React.Component {
  async unreg() {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations()

      for (const registration of registrations) {
        registration.unregister()
      }

    }
  }

  render() {
    return <button onClick={this.unreg}>Reset service workers</button>
  }
}