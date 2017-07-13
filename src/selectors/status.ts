import {IRootState} from '../types'

export const statusSelector = ({firebase}: IRootState) =>
  firebase.data.status
