import {createSelector} from 'reselect'
import * as moment from 'moment'
import {sortedLogsSelector} from './sorted-logs'
import {IMomentLog} from '../types'

export const momentedLogsSelector = createSelector(
  sortedLogsSelector,
  (logs): IMomentLog[] => logs.map(({message, time}) => ({
    message,
    time: moment(time)
  }))
)
