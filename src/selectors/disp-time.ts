import {IRootState} from '../types'

export const dispTimeSelector = (state: IRootState) =>
  state.footage.dispTime
