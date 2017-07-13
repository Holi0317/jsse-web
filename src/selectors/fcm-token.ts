import {createSelector} from 'reselect'
import {profileSelector} from './profile'

export const fcmTokenSelector = createSelector(
  profileSelector,
  (profile: any): string | null =>
    profile ? profile.fcmToken : null
)
