import {createSelector} from 'reselect'
import {dataToJS} from 'react-redux-firebase'

export const logsSelector = createSelector(
  state => dataToJS(state.firebase, 'log'),
  logs => (
    Object.entries(logs || {}).map(([, log]) =>
      log
    )
  )
)
