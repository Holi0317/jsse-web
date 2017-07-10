import {pathToJS} from 'react-redux-firebase'

export const authSelector = state =>
  pathToJS(state.firebase, 'auth')
