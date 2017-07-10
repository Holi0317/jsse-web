import {createSelector} from 'reselect'
import {dataToJS} from 'react-redux-firebase'

const disorderFootageSelector = createSelector(
  state => dataToJS(state.firebase, 'footage'),
  footages => (
    Object.entries(footages || {}).map(([, footage]) =>
      footage
    )
  )
)

/**
 * Select array of footage available in database.
 */
export const footageSelector = createSelector(
  disorderFootageSelector,
  footages => {
    const clone = footages.slice()
    clone.sort((a, b) => (
      a.time - b.time
    ))
    return clone
  }
)
