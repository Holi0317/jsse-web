import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import FlatButton from 'material-ui/FlatButton'

class LogoutImpl extends React.Component {
  public props: {
    firebase: any
  }

  public render() {
    return (
      <FlatButton label="Logout" onClick={this.logout} />
    )
  }

  private logout = () => {
    this.props.firebase.logout()
  }
}

export const Logout = firebaseConnect()(LogoutImpl)
