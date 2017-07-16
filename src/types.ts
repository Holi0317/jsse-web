import {IFootageState} from './reducer/footage'
import * as moment from 'moment'

export type Dispatch = (action: any) => void

export interface IFootage {
  time: number // Unix timestamp
  path: string // Google cloud store path
}

export interface ILog {
  time: number // Unix timestamp
  message: string
}

export interface IMomentLog {
  time: moment.Moment
  message: string
}

export interface IRootState {
  firebase: any
  footage: IFootageState
}

export interface IDropdownOptions {
  label: string
  value: string
}
