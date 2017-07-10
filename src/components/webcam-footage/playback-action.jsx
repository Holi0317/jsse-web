import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {playOrPauseSelector} from '../../selectors/play-or-pause'

const mapStateToProps = state => ({
  text: playOrPauseSelector(state)
})

const mapDispatchToProps = dispatch => ({
  togglePlay() {
    dispatch({
      type: 'FOOTAGE/TOGGLE_PLAY'
    })
  },
  showLatest() {
    dispatch({
      type: 'FOOTAGE/SET_DISP_TIME',
      dispTime: null
    })
  }
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class PlaybackAction extends React.Component {
  render() {
    const {text, togglePlay, showLatest} = this.props
    return (
      <div>
        <button onClick={togglePlay}>{text}</button>
        <button onClick={showLatest}>Show latest photo</button>
      </div>
    )
  }
}
