import * as React from 'react'
import {TokenRefresher} from './token-refresher'
import {NotificationDisplay} from './notification-display'
import {LocalFcmTokenDisplay} from './local-fcm-token-display'
import {ResetServiceWorker} from './reset-service-worker'
import {PermissionStatus} from './permission-status'
import {RemoteFcmTokenDisplay} from './remote-fcm-token-display'
import {NotificationRegister} from './notification-register'

const isSupported = PushManager && navigator.serviceWorker && Notification

export function NotificationSettings() {
  if (!isSupported) {
    return <div>Push notification is not supported.</div>
  }
  return (
    <div>
      <PermissionStatus />
      <LocalFcmTokenDisplay />
      <RemoteFcmTokenDisplay />
      <NotificationDisplay />
      <NotificationRegister />
      <ResetServiceWorker />
      <TokenRefresher />
    </div>
  )
}
