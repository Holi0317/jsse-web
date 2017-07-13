import {authSelector} from './auth'
import {createSelector} from 'reselect'

export const uidSelector = createSelector(
  authSelector,
  (auth): string | null =>
    auth ? auth.uid : null
)
