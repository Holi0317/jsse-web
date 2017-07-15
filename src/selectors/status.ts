import {IRootState} from '../types'

export const statusSelector = ({firebase}: IRootState): string =>
  firebase.data.status
