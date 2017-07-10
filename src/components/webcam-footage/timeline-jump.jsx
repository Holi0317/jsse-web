import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {TimeSelector} from './time-selector'

const mapDispatchToProps = dispatch => ({
  changeTime() {
    dispatch({type: 'FOOTAGE/USE_TMP_TIME'})
  }
})

@firebaseConnect([
  '/footage'
])
@connect(null, mapDispatchToProps)
export class TimelineJump extends React.Component {
  render() {
    const {changeTime} = this.props
    return (
      <div>
        <div>
          <span>Go To</span>
          <TimeSelector />
        </div>
        <div>
          <button onClick={changeTime}>Go</button>
        </div>
      </div>
    )
  }
}
