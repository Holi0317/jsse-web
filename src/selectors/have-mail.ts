import {IRootState} from '../types'

export const haveMailSelector = ({firebase}: IRootState): boolean =>
  firebase.data.haveMail
