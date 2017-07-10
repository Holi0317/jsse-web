import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {availableTimeOptionsSelector} from '../../selectors/available-time-options'

const mapStateToProps = state => ({
  time: availableTimeOptionsSelector(state)
})

const mapDispatchToProps = dispatch => ({
  setDate(event) {

  },
  setHour(event) {

  },
  setMinute(event) {

  }
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps, mapDispatchToProps)
export class TimeSelector extends React.Component {
  componentWillMount() {
    const {setDate} = this.props
  }

  render() {
    return null
  }
}
