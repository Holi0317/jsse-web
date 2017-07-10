import {createSelector} from 'reselect'
import {availableTimeSelector} from './available-time'
import moment from 'moment'

function uniqDates(time) {
  // The following array is repeated unix timestamp
  const dates_ = time.map(time =>
    moment({year: time.year(), month: time.month(), day: time.date()}).unix()
  )
  const dates = [...new Set(dates_)] // Cheap lodash.uniq
  return dates.map(date => moment(date))
}

/**
 * Select a ES6 Map that maps webcam footage day (time excluded moment object)
 * to array of date in that day.
 */
export const availableMapSelector = createSelector(
  availableTimeSelector,
  times => {
    const momented = times.map(time => moment(time))
    const dates = uniqDates(momented)
    const dateMap = new Map()
    for (const date of dates) {
      const value = momented.filter(time => time.isSame(date, 'day'))
      dateMap.set(date, value)
    }
    return dateMap
  }
)
