import {IRootState} from '../types'

export const mailCountSelector = ({firebase}: IRootState) =>
  firebase.data.mailCount
