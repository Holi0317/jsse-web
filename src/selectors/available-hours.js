import {createSelector} from 'reselect'
import uniqWith from 'lodash-es/uniqWith'
import moment from 'moment'
import {availableTimeSelector} from './available-time'

export const availableHoursSelector = createSelector(
  availableTimeSelector,
  state => state.footage.tmpDate,
  (times, tmpDate) => {
    if (!tmpDate) {
      return []
    }
    const day = moment(tmpDate)
    const matchedTimes = times
      .map(time => moment(time)) // Change all object to moment object
      .filter(time => time.isSame(day, 'day')) // Filter: Only same date can keep here
    const uniqTimes = uniqWith(matchedTimes, (a, b) => a.isSame(b, 'hour'))
    return uniqTimes.map(time => ({
      value: time.format('HH'),
      label: time.format('HH')
    }))
  }
)
