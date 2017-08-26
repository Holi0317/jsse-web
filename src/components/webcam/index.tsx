import * as React from 'react'
import {FootageImg} from './footage-img'
import {TimeDisp} from './time-disp'
import {PlaybackAction} from './playback-action'
import {TimelineJump} from './timeline-jump'
import {PlaybackRunner} from './playback-runner'

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
