import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import FlatButton from 'material-ui/FlatButton'
import {Dispatch} from '../../types'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showLatest() {
    dispatch({
      dispTime: null,
      type: 'FOOTAGE/SET_DISP_TIME'
    })
  }
})

interface IPlaybackActionProps {
  showLatest: () => void
}

function PlaybackActionImpl({showLatest}: IPlaybackActionProps) {
  return (
    <div>
      <FlatButton label="Show latest photo" onClick={showLatest} />
    </div>
  )
}

export const PlaybackAction = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(null, mapDispatchToProps)
)(PlaybackActionImpl)
