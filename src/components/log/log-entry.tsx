import * as React from 'react'
import * as moment from 'moment'

interface ILogEntryProps {
  message: string
  time: moment.Moment
}

export function LogEntry({message, time}: ILogEntryProps) {
  const dispTime = time.fromNow()
  const alt = time.format('M/D H:m:s')
  return (
    <tr>
      <td title={alt}>{dispTime}</td>
      <td>{message}</td>
    </tr>
  )
}
