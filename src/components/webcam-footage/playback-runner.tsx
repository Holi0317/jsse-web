import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import * as moment from 'moment'
import FlatButton from 'material-ui/FlatButton'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'
import {availableTimeSelector} from '../../selectors/available-time'
import styles from './playback-runner.css'
import {Dispatch, IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  availableTime: availableTimeSelector(state),
  dispTime: dispFootageTimeSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTime(newTime: number) { // UnixTime
    dispatch({type: 'FOOTAGE/SET_DISP_TIME', dispTime: newTime})
  }
})

interface IPlaybackRunnerProps {
  availableTime: number[]
  dispTime: moment.Moment | null

  changeTime: (newTime: number) => void
}

class PlaybackRunnerImpl extends React.Component {
  public props: IPlaybackRunnerProps

  public render() {
    return (
      <div>
        <FlatButton label="<-" onClick={this.back} />
        <FlatButton label="->" onClick={this.forward} className={styles.forwardBtn} />
      </div>
    )
  }

  private back = () => {
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

  private forward = () => {
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
}

export const PlaybackRunner = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(PlaybackRunnerImpl)
