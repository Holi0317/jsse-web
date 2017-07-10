import {createSelector} from 'reselect'
import {availableMapSelector} from './available-map'

export const availableTimeOptionsSelector = createSelector(
  availableMapSelector,
  state => state.footage.tmpTime,
  (dateMap, tmpTime) => {

  }
)
