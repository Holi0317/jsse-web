import * as React from 'react'
import {ChangeEvent, EventHandler} from 'react'
import flowRight from 'lodash-es/flowRight'
import * as moment from 'moment'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import DatePicker from 'react-datepicker'
import {availableDatesSelector} from '../../selectors/available-dates'
import {tmpDateSelector} from '../../selectors/tmp-date'
import {availableHoursSelector} from '../../selectors/available-hours'
import {SelectOptions} from '../select-options'
import {tmpHourSelector} from '../../selectors/tmp-hour'
import {Dispatch, IDropdownOptions, IRootState} from '../../types'
import styles from './time-selector.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const mapStateToProps = (state: IRootState) => ({
  dates: availableDatesSelector(state),
  hours: availableHoursSelector(state),
  tmpDate: tmpDateSelector(state),
  tmpHour: tmpHourSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDay(value: moment.Moment) {
    const tmpDate = value.format('YYYY-MM-DD')
    dispatch({type: 'FOOTAGE/SET_TMP_DATE', tmpDate})
  },
  setHour(event: ChangeEvent<HTMLSelectElement>) {
    const {value} = event.target
    dispatch({type: 'FOOTAGE/SET_TMP_HOUR', tmpHour: value})
  }
})

interface ITimeSelectorProps {
  dates: moment.Moment[]
  hours: IDropdownOptions[]
  tmpHour: string | null
  tmpDate: moment.Moment

  setDay: EventHandler<ChangeEvent<HTMLInputElement>>
  setHour: EventHandler<ChangeEvent<HTMLSelectElement>>
}

function TimeSelectorImpl({dates, hours, tmpHour, tmpDate, setDay, setHour}: ITimeSelectorProps) {
  return (
    <span>
        <DatePicker selected={tmpDate} includeDates={dates} onChange={setDay} />
        <SelectOptions label="Hour" className={styles.select} options={hours} onChange={setHour} selected={tmpHour} />
      </span>
  )
}

export const TimeSelector = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(TimeSelectorImpl)
