/**
 * Select service worker registration promise from redux store.
 * Selected value may be null
 */
export const sw = state =>
  state.sw