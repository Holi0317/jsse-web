import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {statusSelector} from '../selectors/status'
import {haveMailSelector} from '../selectors/have-mail'
import {IRootState} from '../types'

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
    return (
      <div>
        <div>Status: {status}</div>
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
