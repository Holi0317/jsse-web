import {createSelector} from 'reselect'
import * as moment from 'moment'
import {IRootState} from '../types'

export const tmpDateSelector = createSelector(
  (state: IRootState) => state.footage.tmpDate || '',
  tmpDate => tmpDate === '' ? moment() : moment(tmpDate)
)
