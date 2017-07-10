import {createSelector} from 'reselect'
import {dispFootageSelector} from './disp-footage'

/**
 * Select image link of the footage need to be displayed.
 */
export const footageImgSelector = createSelector(
  dispFootageSelector,
  footage =>
    footage ? footage.path : null
)
