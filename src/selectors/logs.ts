import {createSelector} from 'reselect'
import toPairs from 'lodash-es/toPairs'
import {ILog, IRootState} from '../types'

export const logsSelector = createSelector(
  (state: IRootState) => state.firebase.data.log,
  (logs): ILog[] => (
    toPairs(logs || {}).map(([, log]) =>
      log
    )
  )
)
