import * as React from 'react'

export function PermissionStatus() {
  const status = (Notification as any).permission
  return <div>Notification permission status: {status}</div>
}
