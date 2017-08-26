import * as React from 'react'
import {Logout} from './auth/logout'
import {NotificationSettings} from './notification'
import {Log} from './log'
import {Status} from './status'
import {Webcam} from './webcam'

export function AuthView() {
  return (
    <div>
      <h3>Webcam footage</h3>
      <Webcam />
      <h3>Current status</h3>
      <Status />
      <h3>Mail Log</h3>
      <Log />
      <h3>Notification settings</h3>
      <NotificationSettings />
      <h3>Authentication</h3>
      <Logout />
    </div>
  )
}
