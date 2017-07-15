import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'
import {statusSelector} from '../selectors/status'
import {mailCountSelector} from '../selectors/mail-count'
import {IRootState} from '../types'

const mapStateToProps = (state: IRootState) => ({
  mailCount: mailCountSelector(state),
  status: statusSelector(state)
})

interface IStatusProps {
  mailCount: number
  status: string

  firebase: any
}

class StatusImpl extends React.Component {
  public props: IStatusProps

  public render() {
    const {status, mailCount} = this.props
    return (
      <div>
        <div>Status: {status}</div>
        <div>Number of mail: {mailCount}</div>
        <RaisedButton label="Reset number of mail" secondary={true} onClick={this.resetMail} />
      </div>
    )
  }

  private resetMail = () => {
    const {firebase} = this.props
    firebase.set('mailCount', 0)
  }
}

export const Status = flowRight(
  firebaseConnect([
    'status',
    'mailCount'
  ]),
  connect(mapStateToProps)
)(StatusImpl)
