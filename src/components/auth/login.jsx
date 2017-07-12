import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'

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
      <RaisedButton label="Login with Google" primary={true} onClick={this.login} />
    )
  }
}
