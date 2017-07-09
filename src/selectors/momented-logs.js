import {createSelector} from 'reselect'
import moment from 'moment'
import {sortedLogsSelector} from './sorted-logs'

export const momentedLogsSelector = createSelector(
  sortedLogsSelector,
  logs => logs.map(({message, time}) => ({
    message,
    time: moment(time)
  }))
)