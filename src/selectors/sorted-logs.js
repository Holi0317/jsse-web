import {createSelector} from 'reselect'
import {logsSelector} from './logs'

export const sortedLogsSelector = createSelector(
  logsSelector,
  logs => {
    const clone = logs.slice()
    clone.sort((a, b) => (
      a.time - b.time
    ))
    return clone
  }
)