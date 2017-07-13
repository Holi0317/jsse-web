import toPairs from 'lodash-es/toPairs'
import {createSelector} from 'reselect'
import {IFootage, IRootState} from '../types'

const disorderFootageSelector = createSelector(
  (state: IRootState) => state.firebase.data.footage,
  (footages): IFootage[] => (
    toPairs(footages || {}).map(([, footage]) =>
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
