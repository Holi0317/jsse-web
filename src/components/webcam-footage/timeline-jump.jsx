import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {TimeSelector} from './time-selector'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class TimelineJump extends React.Component {
  render() {
    return (
      <div>
        <span>Go To</span>
        <TimeSelector />
      </div>
    )
  }
}
