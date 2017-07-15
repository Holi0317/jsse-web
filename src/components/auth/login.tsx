import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'

class LoginImpl extends React.Component {
  public props: {
    firebase: any
  }

  public render() {
    return (
      <RaisedButton label="Login with Google" primary={true} onClick={this.login} />
    )
  }

  private login = () => {
    this.props.firebase.login({
      provider: 'google',
      type: 'popup'
    })
  }
}

export const Login = firebaseConnect()(LoginImpl)
