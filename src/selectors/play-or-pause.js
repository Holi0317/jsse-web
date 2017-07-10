import {createSelector} from 'reselect'
import {playingSelector} from './playing'

/**
 * Should the text in play/pause button be play or pause?
 * I know that is a terrible name ._.
 */
export const playOrPauseSelector = createSelector(
  playingSelector,
  playing =>
    playing ? 'pause' : 'play'
)
