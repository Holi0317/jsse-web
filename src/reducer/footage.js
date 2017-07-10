const defaultState = {
  dispTime: null, // Null means the latest. Otherwise this will be a datetime number
  playing: true // Play or pause
}

export function footage(state = defaultState, action) {
  switch (action.type) {
  case 'FOOTAGE/TOGGLE_PLAY':
    return {
      ...state,
      playing: !state.playing
    }
  case 'FOOTAGE/SET_DISP_TIME':
    return {
      ...state,
      dispTime: action.dispTime
    }
  default:
    return state
  }
}
