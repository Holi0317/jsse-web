export interface IFootageState {
  dispTime: number | null
  tmpDate: string | null
  tmpHour: string | null
  tmpMinute: string | null
}

export type FootageAction =
  | {type: 'FOOTAGE/SET_DISP_TIME', dispTime: number | null}
  | {type: 'FOOTAGE/SET_TMP_DATE', tmpDate: string | null}
  | {type: 'FOOTAGE/SET_TMP_HOUR', tmpHour: string | null}
  | {type: 'FOOTAGE/SET_TMP_MINUTE', tmpMinute: string | null}

const defaultState: IFootageState = {
  dispTime: null, // Null means the latest. Otherwise this will be a datetime number
  tmpDate: null, // Selected date (No time included) on select element. String
  tmpHour: null, // Selected hour on select element. String
  tmpMinute: null // Selected minute on select element. String
}

export function footage(state = defaultState, action: FootageAction) {
  switch (action.type) {
  case 'FOOTAGE/SET_DISP_TIME':
    return {
      ...state,
      dispTime: action.dispTime
    }
  case 'FOOTAGE/SET_TMP_DATE':
    return {
      ...state,
      tmpDate: action.tmpDate,
      tmpHour: null
    }
  case 'FOOTAGE/SET_TMP_HOUR':
    return {
      ...state,
      tmpHour: action.tmpHour
    }
  case 'FOOTAGE/SET_TMP_MINUTE':
    return {
      ...state,
      tmpMinute: action.tmpMinute
    }
  default:
    return state
  }
}
