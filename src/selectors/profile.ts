import {IRootState} from '../types'

export const profileSelector = (state: IRootState) =>
  state.firebase.profile
