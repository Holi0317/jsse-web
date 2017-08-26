import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import * as moment from 'moment'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'
import {IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  time: dispFootageTimeSelector(state)
})

interface ITimeDispProps {
  time: moment.Moment | null
}

function TimeDispImpl({time}: ITimeDispProps) {
  if (time) {
    return <div>Photo taken on {time.calendar()}</div>
  }
  return null
}

export const TimeDisp = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(mapStateToProps)
)(TimeDispImpl)
