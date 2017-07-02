import * as firebase from 'firebase/app'
const messaging = firebase.messaging()
const database = firebase.database()
const auth = firebase.auth()

export async function requestMessagingPermission() {
  await messaging.requestPermission()
  const token = await messaging.getToken()
  const user = auth.currentUser
  if (!user) {
    throw new Error('Not authenticated')
  }
  const uid = user.uid
  database.ref(`fcmToken/${uid}`).set(token)
}
