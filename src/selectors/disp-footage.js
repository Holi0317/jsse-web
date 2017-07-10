import {createSelector} from 'reselect'
import {footageSelector} from './footages'

/**
 * Select the footage object to be displayed.
 * Can select null.
 */
export const dispFootageSelector = createSelector(
  state => state.footage.dispTime,
  footageSelector,
  (dispTime, footages) => {
    if (!dispTime) {
      return footages[footages.length - 1] || null
    }
    return footages.find(el => el.time === dispTime) || null
  }
)
