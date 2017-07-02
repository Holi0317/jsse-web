import * as React from 'react'
import {Webcam} from './webcam'
import {Status} from './status'
import {Log} from './log'
import {NotifySettings} from './notify-settings'
import {HttpsRedirect} from './https-redirect'

export function App() {
  return (
    <div>
      <h1>JSSE PH23 smart mail box</h1>
      <h3>Webcam footage</h3>
      <Webcam />
      <h3>Current status</h3>
      <Status />
      <h3>Mail Log</h3>
      <Log />
      <h3>Notification settings</h3>
      <NotifySettings />

      <HttpsRedirect />
    </div>
  )
}