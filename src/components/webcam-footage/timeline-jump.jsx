import * as React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import {TimeSelector} from './time-selector'
import {footageSelector} from '../../selectors/footages'
import {tmpDateSelector} from '../../selectors/tmp-date'
import {tmpHourSelector} from '../../selectors/tmp-hour'

const mapStateToProps = state => ({
  tmpDate: tmpDateSelector(state),
  tmpHour: tmpHourSelector(state),
  footages: footageSelector(state)
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
  state = {
    error: null
  }

  handleRequestClose = () => {
    this.setState({
      error: null
    })
  }

  changeTime = () => {
    const {footages, tmpDate, tmpHour, changeTime} = this.props

    if (!(tmpDate && tmpHour)) {
      this.setState({
        error: 'You must specify both date and hour before jump timeline'
      })
      return
    }

    const momented = footages.map(footage => moment(footage.time))
    const desiredTime = moment(`${tmpDate} ${tmpHour}`, 'YYYY-MM-DD HH')
    const time = momented.find(time => time.isSame(desiredTime, 'hour'))

    changeTime(time.valueOf())
  }

  render() {
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
}
