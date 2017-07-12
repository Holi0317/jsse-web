import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import FlatButton from 'material-ui/FlatButton'

@firebaseConnect()
export class Logout extends React.Component {
  logout = () => {
    this.props.firebase.logout()
  }

  render() {
    return (
      <FlatButton label="Logout" onClick={this.logout} />
    )
  }
}
