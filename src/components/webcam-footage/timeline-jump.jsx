import * as React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
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
  changeTime = () => {
    const {footages, tmpDate, tmpHour, changeTime} = this.props

    if (!(tmpDate && tmpHour)) {
      alert('You must specify both date and hour before jump timeline.') // Its blocking. But I have no time.
      return
    }

    const momented = footages.map(footage => moment(footage.time))
    const desiredTime = moment(`${tmpDate} ${tmpHour}`, 'YYYY-MM-DD HH')
    const time = momented.find(time => time.isSame(desiredTime, 'hour'))

    changeTime(time.valueOf())
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
