import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {statusSelector} from '../selectors/status'
import {haveMailSelector} from '../selectors/have-mail'
import {IRootState} from '../types'
import styles from './status.css'

const mapStateToProps = (state: IRootState) => ({
  haveMail: haveMailSelector(state),
  status: statusSelector(state)
})

interface IStatusProps {
  haveMail: boolean
  status: string

  firebase: any
}

class StatusImpl extends React.Component {
  public props: IStatusProps

  public render() {
    const {status, haveMail} = this.props
    const statusClass = status === 'online' ? styles.online : styles.offline
    return (
      <div>
        <div>Status: <span className={statusClass}>{status}</span></div>
        <div>{haveMail ? 'You have mail in your mailbox' : 'No mail exist in your mailbox'}</div>
      </div>
    )
  }
}

export const Status = flowRight(
  firebaseConnect([
    'status',
    'haveMail'
  ]),
  connect(mapStateToProps)
)(StatusImpl)
