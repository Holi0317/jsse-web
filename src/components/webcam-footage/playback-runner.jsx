import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import FlatButton from 'material-ui/FlatButton'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'
import {availableTimeSelector} from '../../selectors/available-time'
import styles from './playback-runner.css'

const mapStateToProps = state => ({
  dispTime: dispFootageTimeSelector(state), // Moment | null
  availableTime: availableTimeSelector(state) // UnixTime[]
})

const mapDispatchToProps = dispatch => ({
  changeTime(newTime) { // UnixTime
    dispatch({type: 'FOOTAGE/SET_DISP_TIME', dispTime: newTime})
  }
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class PlaybackRunner extends React.Component {
  back = () => {
    const {dispTime, availableTime, changeTime} = this.props
    if (dispTime === null) {
      changeTime(availableTime[availableTime.length - 2])
      return
    }

    const unixDispTime = dispTime.valueOf()
    const index = availableTime.indexOf(unixDispTime)
    if (index <= 0) {
      return
    }
    changeTime(availableTime[index - 1])
  }

  forward = () => {
    const {dispTime, availableTime, changeTime} = this.props
    if (dispTime === null) {
      return
    }

    const unixDispTime = dispTime.valueOf()
    const index = availableTime.indexOf(unixDispTime)
    if (index === availableTime.length - 1) {
      return
    }
    changeTime(availableTime[index + 1])
  }

  render() {
    return (
      <div>
        <FlatButton label="<-" onClick={this.back} />
        <FlatButton label="->" onClick={this.forward} className={styles.forwardBtn} />
      </div>
    )
  }
}
