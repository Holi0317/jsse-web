import * as firebase from 'firebase/app'
const messaging = firebase.messaging()
const database = firebase.database()
const auth = firebase.auth()

export async function requestMessagingPermission(registration) {
  // Use our own service worker.
  const reg = await registration
  messaging.useServiceWorker(reg)

  // Validate user is login-ed
  const user = auth.currentUser
  if (!user) {
    throw new Error('Not authenticated')
  }

  // Request for permission
  await messaging.requestPermission()

  // Request for a token
  const token = await messaging.getToken()

  // Save token into firebase
  const uid = user.uid
  await database.ref(`fcmToken/${uid}`).set(token)
  console.log('Token:', token)
}
