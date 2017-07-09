import * as React from 'react'
import {TokenRefresher} from './notification/token-refresher'
import {NotificationDisplay} from './notification/notification-display'
import {LocalFcmTokenDisplay} from './notification/local-fcm-token-display'
import {ResetServiceWorker} from './notification/reset-service-worker'
import {PermissionStatus} from './notification/permission-status'
import {RemoteFcmTokenDisplay} from './notification/remote-fcm-token-display'
import {NotificationRegister} from './notification/notification-register'

const isSupported = window.PushManager && navigator.serviceWorker && Notification

export function NotifySettings() {
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
