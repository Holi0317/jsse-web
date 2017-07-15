import {createSelector} from 'reselect'
import uniqWith from 'lodash-es/uniqWith'
import * as moment from 'moment'
import {availableTimeSelector} from './available-time'
import {IDropdownOptions, IRootState} from '../types'

export const availableHoursSelector = createSelector(
  availableTimeSelector,
  (state: IRootState) => state.footage.tmpDate,
  (times: number[], tmpDate: string | null): IDropdownOptions[] => {
    if (!tmpDate) {
      return []
    }
    const day = moment(tmpDate)
    const matchedTimes = times
      .map(time => moment(time)) // Change all object to moment object
      .filter(time => time.isSame(day, 'day')) // Filter: Only same date can keep here
    const uniqTimes: typeof matchedTimes = uniqWith(matchedTimes,
      (a: moment.Moment, b: moment.Moment) => a.isSame(b, 'hour')
    )
    return uniqTimes.map(time => ({
      label: time.format('HH'),
      value: time.format('HH')
    }))
  }
)
