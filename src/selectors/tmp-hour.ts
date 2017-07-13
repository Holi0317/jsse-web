import {IRootState} from '../types'

export const tmpHourSelector = (state: IRootState) =>
  state.footage.tmpHour || ''
