import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'

@firebaseConnect()
export class Login extends React.Component {
  login = () => {
    this.props.firebase.login({
      provider: 'google',
      type: 'popup'
    })
  }

  render() {
    return (
      <button onClick={this.login}>Login with Google</button>
    )
  }
}
