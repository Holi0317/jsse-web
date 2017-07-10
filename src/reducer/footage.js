const defaultState = {
  dispTime: null, // Null means the latest. Otherwise this will be a datetime number
  playing: true, // Play or pause
  tmpDate: null, // Selected date (No time included) on select element. String
  tmpHour: null // Selected hour on select element. String
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
  case 'FOOTAGE/SET_TMP_DATE':
    return {
      ...state,
      tmpDate: action.tmpDate
    }
  case 'FOOTAGE/SET_TMP_HOUR':
    return {
      ...state,
      tmpHour: action.tmpHour
    }
  default:
    return state
  }
}
