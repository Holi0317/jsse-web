import {createSelector} from 'reselect'
import moment from 'moment'
import {availableTimeSelector} from './available-time'

export const availableHoursSelector = createSelector(
  availableTimeSelector,
  state => state.footage.tmpDate,
  (times, tmpDate) => {
    if (!tmpDate) {
      return []
    }
    const momented = times.map(time => moment(time))
    const day = moment(tmpDate)
    const matchedTimes = momented.filter(time => time.isSame(day, 'day'))
    return matchedTimes.map(time => ({
      value: time.format('HH'),
      label: time.format('HH')
    }))
  }
)
