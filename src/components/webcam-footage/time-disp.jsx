import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'

const mapStateToProps = state => ({
  time: dispFootageTimeSelector(state)
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps)
export class TimeDisp extends React.Component {
  render() {
    const {time} = this.props
    if (time) {
      return <div>Photo taken on {time.calendar()}</div>
    }
    return null
  }
}
