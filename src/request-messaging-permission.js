import * as firebase from 'firebase/app'
const messaging = firebase.messaging()
const database = firebase.database()
const auth = firebase.auth()

export async function requestMessagingPermission() {
  // Validate user is login-ed
  const user = auth.currentUser
  if (!user) {
    throw new Error('Not authenticated')
  }

  // Request for permission
  await messaging.requestPermission()
  console.log('Permission requested')

  // Request for a token
  const token = await messaging.getToken()
  console.log('Token:', token)

  // Save token into firebase
  const uid = user.uid
  await database.ref(`fcmToken/${uid}`).set(token)
}
