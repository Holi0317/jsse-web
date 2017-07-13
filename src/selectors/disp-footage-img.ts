import {createSelector} from 'reselect'
import {dispFootageSelector} from './disp-footage'
import {IFootage} from '../types'

/**
 * Select image link of the footage need to be displayed.
 */
export const dispFootageImgSelector = createSelector(
  dispFootageSelector,
  (footage: IFootage | null) =>
    footage ? footage.path : null
)
