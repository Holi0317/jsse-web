import {IRootState} from '../types'

export const authSelector = (state: IRootState) =>
  state.firebase.auth
