import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'

const mapDispatchToProps = dispatch => ({
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
@connect(null, mapDispatchToProps)
export class PlaybackAction extends React.Component {
  render() {
    const {showLatest} = this.props
    return (
      <div>
        <button onClick={showLatest}>Show latest photo</button>
      </div>
    )
  }
}
