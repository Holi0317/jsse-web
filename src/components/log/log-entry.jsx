import * as React from 'react'

export function LogEntry({message, time}) {
  const dispTime = time.fromNow()
  const alt = time.format('M/D H:m:s')
  return (
    <tr>
      <td title={alt}>{dispTime}</td>
      <td>{message}</td>
    </tr>
  )
}
