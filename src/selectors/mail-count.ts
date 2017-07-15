import {IRootState} from '../types'

export const mailCountSelector = ({firebase}: IRootState): number =>
  firebase.data.mailCount
