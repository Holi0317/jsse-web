const defaultState = null

export function sw(state = defaultState, action) {
  switch (action.type) {
  case 'SW/SET_SW':
    return action.sw
  default:
    return state
  }
}