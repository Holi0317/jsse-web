import {createSelector} from 'reselect'
import {footageSelector} from './footages'
import {dispTimeSelector} from './disp-time'
import {IFootage} from '../types'

/**
 * Select the footage object to be displayed.
 * Can select null.
 */
export const dispFootageSelector = createSelector(
  dispTimeSelector,
  footageSelector,
  (dispTime: number, footages: IFootage[]): IFootage | null => {
    if (!dispTime) {
      return footages[footages.length - 1] || null
    }
    return footages.find(el => el.time === dispTime) || null
  }
)
