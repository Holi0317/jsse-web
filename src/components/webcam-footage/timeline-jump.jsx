import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {TimeSelector} from './time-selector'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  changeTime(newTime) {
    dispatch({
      type: 'FOOTAGE/SET_DISP_TIME',
      dispTime: newTime
    })
  }
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class TimelineJump extends React.Component {
  changeTime = () => {
    const {changeTime} = this.props

  }

  render() {
    return (
      <div>
        <div>
          <span>Go To</span>
          <TimeSelector />
        </div>
        <div>
          <button onClick={this.changeTime}>Go</button>
        </div>
      </div>
    )
  }
}
