import {dataToJS} from 'react-redux-firebase'

export const statusSelector = ({firebase}) =>
  dataToJS(firebase, 'status')