import * as React from 'react'
import * as firebase from 'firebase/app'
const auth = firebase.auth()

export class Logout extends React.Component {
  logout = () => {
    auth.signOut()
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}