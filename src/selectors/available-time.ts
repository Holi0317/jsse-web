import {createSelector} from 'reselect'
import {footageSelector} from './footages'

export const availableTimeSelector = createSelector(
  footageSelector,
  footages =>
    footages.map(footage => footage.time)
)
