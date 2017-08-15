import {createSelector} from 'reselect'
import * as moment from 'moment'
import {availableTimeSelector} from './available-time'

function uniqDates(times: moment.Moment[]) {
  // The following array is repeated unix timestamp
  const dates = times.map(time =>
    moment({year: time.year(), month: time.month(), day: time.date()}).valueOf()
  )
  const uniqedDates: typeof dates = [...new Set(dates)] // Cheap lodash.uniq
  return uniqedDates.map(date => moment(date))
}

export const availableDatesSelector = createSelector(
  availableTimeSelector,
  times => {
    const momented = times.map(time => moment(time))
    return uniqDates(momented)
  }
)
