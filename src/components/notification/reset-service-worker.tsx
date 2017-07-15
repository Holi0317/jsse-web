import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'

export class ResetServiceWorker extends React.Component {
  public render() {
    return <FlatButton label="Reset service workers" onClick={this.unreg} />
  }

  private async unreg() {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations()

      for (const registration of registrations) {
        registration.unregister()
      }

    }
  }
}
