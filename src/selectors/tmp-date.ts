import {IRootState} from '../types'

export const tmpDateSelector = (state: IRootState) =>
  state.footage.tmpDate || ''
