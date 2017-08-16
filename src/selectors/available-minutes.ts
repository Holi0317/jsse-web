import {createSelector} from 'reselect'
import uniqWith from 'lodash-es/uniqWith'
import * as moment from 'moment'
import {availableTimeSelector} from './available-time'
import {IDropdownOptions} from '../types'
import {tmpDateSelector} from './tmp-date'
import {tmpHourSelector} from './tmp-hour'

export const availableMinutes = createSelector(
  availableTimeSelector,
  tmpDateSelector,
  tmpHourSelector,
  (times: moment.Moment[], tmpDate: moment.Moment, tmpHour: string): IDropdownOptions[] => {
    if (!tmpHour) {
      return []
    }

    const selectedHour = moment(tmpDate).add(+tmpHour, 'h')

    const matchedTimes = times
      .filter(time => time.isSame(selectedHour, 'hour')) // Filter: Only same date can keep here
    const uniqTimes: typeof matchedTimes = uniqWith(matchedTimes,
      (a: moment.Moment, b: moment.Moment) => a.isSame(b, 'minute')
    )
    return uniqTimes.map(time => ({
      label: time.format('mm'),
      value: time.format('mm')
    }))
  }
)
