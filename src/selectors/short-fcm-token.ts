import {createSelector} from 'reselect'
import {fcmTokenSelector} from './fcm-token'

export const shortFcmTokenSelector = createSelector(
  fcmTokenSelector,
  token => (
    token ? token.slice(0, 10) + '...' : null
  )
)
