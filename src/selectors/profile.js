import {pathToJS} from 'react-redux-firebase'

export const profileSelector = state =>
  pathToJS(state.firebase, 'profile')
