import * as firebase from 'firebase/app'
const messaging = firebase.messaging()

export async function requestMessagingPermission(uid: string, set: (path: string, value: any) => Promise<void>) {
  // Validate user is login-ed
  if (!uid) {
    throw new Error('Not authenticated')
  }

  // Request for permission
  await messaging.requestPermission()
  console.log('Permission requested')

  // Request for a token
  const token = await messaging.getToken()
  console.log('Token:', token)

  // Save token into firebase
  await set(`users/${uid}/fcmToken`, token)
}
