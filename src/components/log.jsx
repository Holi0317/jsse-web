import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {LogEntry} from './log/log-entry'
import {momentedLogsSelector} from '../selectors/momented-logs'

const mapStateToProps = state => ({
  logs: momentedLogsSelector(state)
})

@firebaseConnect([
  '/log'
])
@connect(mapStateToProps)
export class Log extends React.Component {
  render() {
    const {logs} = this.props
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
}
