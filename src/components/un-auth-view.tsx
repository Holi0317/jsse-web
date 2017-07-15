import * as React from 'react'
import {Login} from './auth/login'

export function UnAuthView() {
  return (
    <div>
      <h3>Authentication</h3>
      <Login />
    </div>
  )
}
