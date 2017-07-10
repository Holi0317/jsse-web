import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {statusSelector} from '../selectors/status'

const mapStateToProps = state => ({
  status: statusSelector(state)
})

@firebaseConnect([
  'status'
])
@connect(mapStateToProps)
export class Status extends React.Component {
  render() {
    const {status} = this.props
    return (
      <div>
        <div>Status: {status}</div>
      </div>
    )
  }
}
