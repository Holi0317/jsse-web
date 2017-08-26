import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {LogEntry} from './log-entry'
import {momentedLogsSelector} from '../../selectors/momented-logs'
import {IMomentLog, IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  logs: momentedLogsSelector(state)
})

interface ILogProps {
  logs: IMomentLog[]
}

function LogImpl({logs}: ILogProps) {
  return (
    <table>
      <thead>
      <tr>
        <th>Time</th>
        <th>Message</th>
      </tr>
      </thead>
      <tbody>
      {logs.map((log, i) => (
        <LogEntry key={i} message={log.message} time={log.time} />
      ))}
      </tbody>
    </table>
  )
}

export const Log = flowRight(
  firebaseConnect([
    '/log#limitToFirst=50'
  ]),
  connect(mapStateToProps)
)(LogImpl)
