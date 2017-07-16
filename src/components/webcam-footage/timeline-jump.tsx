import * as React from 'react'
import * as moment from 'moment'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import {TimeSelector} from './time-selector'
import {footageSelector} from '../../selectors/footages'
import {tmpDateSelector} from '../../selectors/tmp-date'
import {tmpHourSelector} from '../../selectors/tmp-hour'
import {Dispatch, IFootage, IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  footages: footageSelector(state),
  tmpDate: tmpDateSelector(state),
  tmpHour: tmpHourSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTime(newTime: number) {
    dispatch({
      dispTime: newTime,
      type: 'FOOTAGE/SET_DISP_TIME'
    })
  }
})

interface ITimelineJumpProps {
  footages: IFootage[]
  tmpDate: string | null
  tmpHour: string | null

  changeTime: (newTime: number) => void
}

interface ITimelineJumpState {
  error: string | null
}

class TimelineJumpImpl extends React.Component {
  public props: ITimelineJumpProps
  public state: ITimelineJumpState = {
    error: null
  }

  public render() {
    const {error} = this.state

    return (
      <div>
        <div>
          <span>Go To</span>
          <TimeSelector />
        </div>
        <div>
          <RaisedButton label="Go" primary={true} onClick={this.changeTime} />
        </div>
        <Snackbar open={!!error} message={error || ''} autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
      </div>
    )
  }

  private handleRequestClose = () => {
    this.setState({
      error: null
    })
  }

  private changeTime = () => {
    const {footages, tmpDate, tmpHour, changeTime} = this.props

    if (!(tmpDate && tmpHour)) {
      this.setState({
        error: 'You must specify both date and hour before jump timeline'
      })
      return
    }

    const momented = footages.map(footage => moment(footage.time))
    const desiredTime = moment(`${tmpDate} ${tmpHour}`, 'YYYY-MM-DD HH')
    const time = momented.find(t => t.isSame(desiredTime, 'hour'))

    if (!time) {
      this.setState({
        error: 'Cannot find footage at specified time. This error should not occur.'
      })
      return
    }

    changeTime(time.valueOf())
  }
}

export const TimelineJump = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(TimelineJumpImpl)
