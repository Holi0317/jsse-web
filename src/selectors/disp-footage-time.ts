import {createSelector} from 'reselect'
import * as moment from 'moment'
import {dispFootageSelector} from './disp-footage'

/**
 * Select image time recorded of the footage need to be displayed.
 * The time returned will be an instance of momentJS object.
 */
export const dispFootageTimeSelector = createSelector(
  dispFootageSelector,
  footage =>
    footage ? moment(footage.time) : null
)
