import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import last from 'lodash-es/last'
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
  changeTime(newTime: moment.Moment) {
    dispatch({type: 'FOOTAGE/SET_DISP_TIME', dispTime: newTime.valueOf()})
  }
})

interface IPlaybackRunnerProps {
  availableTime: moment.Moment[]
  dispTime: moment.Moment

  changeTime: (newTime: moment.Moment) => void
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
    const index = availableTime.findIndex(time => time.isSame(dispTime))
    if (index <= 0) {
      return
    }
    changeTime(availableTime[index - 1])
  }

  private forward = () => {
    const {dispTime, availableTime, changeTime} = this.props
    if (availableTime.length === 0) {
      return
    }

    const latestTime = last(availableTime)!  // The array is not empty here. It is safe to assert last will return an element
    if (dispTime.isSame(latestTime)) {
      return
    }

    const index = availableTime.findIndex(time => time.isSame(dispTime))
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
