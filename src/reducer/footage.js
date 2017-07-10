const defaultState = {
  dispTime: null, // Null means the latest. Otherwise this will be a datetime number
  playing: true, // Play or pause
  tmpTime: null // Selected time on select element. Date object
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
  case 'FOOTAGE/SET_TMP_TIME':
    return {
      ...state,
      tmpTime: action.tmpTime
    }
  default:
    return state
  }
}
