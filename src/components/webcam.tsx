import * as React from 'react'
import {FootageImg} from './webcam-footage/footage-img'
import {TimeDisp} from './webcam-footage/time-disp'
import {PlaybackAction} from './webcam-footage/playback-action'
import {TimelineJump} from './webcam-footage/timeline-jump'
import {PlaybackRunner} from './webcam-footage/playback-runner'

export function Webcam() {
  return (
    <div>
      <FootageImg />
      <TimeDisp />
      <PlaybackRunner />
      <PlaybackAction />
      <TimelineJump />
    </div>
  )
}
