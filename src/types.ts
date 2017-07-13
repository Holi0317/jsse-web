import {IFootageState} from './reducer/footage'

export interface IFootage {
  time: number // Unix timestamp
  path: string // Google cloud store path
}

export interface ILog {
  time: number // Unix timestamp
  message: string
}

export interface IRootState {
  firebase: any
  footage: IFootageState
}

export interface IDropdownOptions<T> {
  label: string
  value: T
}
