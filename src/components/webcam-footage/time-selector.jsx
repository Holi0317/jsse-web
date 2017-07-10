import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {availableDatesSelector} from '../../selectors/available-dates'
import {tmpDateSelector} from '../../selectors/tmp-date'
import {availableHoursSelector} from '../../selectors/availabel-hours'
import {SelectOptions} from '../select-options'

const mapStateToProps = state => ({
  tmpDate: tmpDateSelector(state),
  dates: availableDatesSelector(state),
  hours: availableHoursSelector(state)
})

const mapDispatchToProps = dispatch => ({
  setDay(event) {
    const {value} = event.target
    dispatch({type: 'FOOTAGE/SET_TMP_DATE', tmpDate: value})
  },
  setHour(event) {
    const {value} = event.target
    dispatch({type: 'FOOTAGE/SET_TMP_HOUR', tmpHour: value})
  }
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class TimeSelector extends React.Component {
  render() {
    const {dates, hours, tmpDate, setDay, setHour} = this.props

    return (
      <span>
        <input type="date" {...dates} value={tmpDate} onChange={setDay} />
        <SelectOptions label="Hour" options={hours} onChange={setHour} />
      </span>
    )
  }
}
