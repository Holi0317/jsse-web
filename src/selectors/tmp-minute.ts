import {IRootState} from '../types'

export const tmpMinuteSelector = (state: IRootState) =>
  state.footage.tmpMinute || ''
