import * as React from 'react'
import * as firebase from 'firebase/app'
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export class Login extends React.Component {
  login = () => {
    auth.signInWithPopup(provider)
  }

  render() {
    return (
      <button onClick={this.login}>Login with Google</button>
    )
  }
}