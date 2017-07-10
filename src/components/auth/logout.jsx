import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'

@firebaseConnect()
export class Logout extends React.Component {
  logout = () => {
    this.props.firebase.logout()
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}
