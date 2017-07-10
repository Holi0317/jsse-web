import {createSelector} from 'reselect'

export const logsSelector = createSelector(
  state => state.firebase.data.log,
  logs => (
    Object.entries(logs || {}).map(([, log]) =>
      log
    )
  )
)
