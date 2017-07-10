import {createSelector} from 'reselect'
import moment from 'moment'
import {dispFootageSelector} from './disp-footage'

/**
 * Select image time recorded of the footage need to be displayed.
 * The time returned will be an instance of momentJS object.
 */
export const footageTimeSelector = createSelector(
  dispFootageSelector,
  footage =>
    footage ? moment(footage.time) : null
)
