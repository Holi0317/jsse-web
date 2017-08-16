import {createSelector} from 'reselect'
import uniqWith from 'lodash-es/uniqWith'
import * as moment from 'moment'
import {availableTimeSelector} from './available-time'
import {IDropdownOptions} from '../types'
import {tmpDateSelector} from './tmp-date'

export const availableHoursSelector = createSelector(
  availableTimeSelector,
  tmpDateSelector,
  (times: moment.Moment[], tmpDate: moment.Moment): IDropdownOptions[] => {
    const matchedTimes = times
      .filter(time => time.isSame(tmpDate, 'day')) // Filter: Only same date can keep here
    const uniqTimes: typeof matchedTimes = uniqWith(matchedTimes,
      (a: moment.Moment, b: moment.Moment) => a.isSame(b, 'hour')
    )
    return uniqTimes.map(time => ({
      label: time.format('HH'),
      value: time.format('HH')
    }))
  }
)
