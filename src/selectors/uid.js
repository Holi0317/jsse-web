import {authSelector} from './auth'
import {createSelector} from 'reselect'

export const uidSelector = createSelector(
  authSelector,
  auth => auth ? auth.uid : null
)
