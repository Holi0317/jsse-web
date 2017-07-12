import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {statusSelector} from '../selectors/status'
import {mailCountSelector} from '../selectors/mail-count'

const mapStateToProps = state => ({
  status: statusSelector(state),
  mailCount: mailCountSelector(state)
})

@firebaseConnect([
  'status',
  'mailCount'
])
@connect(mapStateToProps)
export class Status extends React.Component {
  resetMail = () => {
    const {firebase} = this.props
    firebase.set('mailCount', 0)
  }

  render() {
    const {status, mailCount} = this.props
    return (
      <div>
        <div>Status: {status}</div>
        <div>Number of mail: {mailCount}</div>
        <button onClick={this.resetMail}>Reset number of mail</button>
      </div>
    )
  }
}
