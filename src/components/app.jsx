import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import {authSelector} from '../selectors/auth'
import styles from '../styles.css'
import {AuthView} from './auth-view'
import {UnAuthView} from './un-auth-view'

@firebaseConnect()
@connect(state => ({
  auth: authSelector(state)
}))
export class App extends React.Component {
  render() {
    const {auth} = this.props
    return (
      <div>
        <AppBar title="JSSE PH23 smart mail box" showMenuIconButton={false} />
        <div className={styles.container}>
          {auth.isEmpty ? <UnAuthView /> : <AuthView />}
        </div>
      </div>
    )
  }
}
