import * as React from 'react'
import moment from 'moment'

export function LogEntry({message, time}) {
  const dispTime = moment(time).fromNow()
  return (
    <tr>
      <td>{dispTime}</td>
      <td>{message}</td>
    </tr>
  )
}