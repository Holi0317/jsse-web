import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import {authSelector} from '../selectors/auth'
import {AuthView} from './auth-view'
import {UnAuthView} from './un-auth-view'
import styles from '../styles.css'
import {IRootState} from '../types'

const mapStateToProps = (state: IRootState) => ({
  auth: authSelector(state)
})

interface IAppProps {
  auth: any
}

function AppImpl({auth}: IAppProps) {
  return (
    <div>
      <AppBar title="JSSE PH23 smart mail box" showMenuIconButton={false} />
      <div className={styles.container}>
        {auth.isEmpty ? <UnAuthView /> : <AuthView />}
      </div>
    </div>
  )
}

export const App = flowRight(
  firebaseConnect(),
  connect(mapStateToProps)
)(AppImpl)
