import {createSelector} from 'reselect'
import {profileSelector} from './profile'

export const fcmTokenSelector = createSelector(
  profileSelector,
  profile => profile ? profile.fcmToken : null
)
