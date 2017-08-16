import {createSelector} from 'reselect'
import * as moment from 'moment'
import {IRootState} from '../types'
import {availableDatesSelector} from './available-dates'

export const tmpDateSelector = createSelector(
  (state: IRootState) => state.footage.tmpDate || '',
  availableDatesSelector,
  (tmpDate: string, availableDates: moment.Moment[]) =>
    tmpDate === '' ? availableDates[availableDates.length - 1] : moment(tmpDate)
)
