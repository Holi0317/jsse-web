import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'

export const config = {
  apiKey: 'AIzaSyABL_RzS1xsUMSpVMY18LI24-yHV6LETjQ',
  authDomain: 'jsse-2017.firebaseapp.com',
  databaseURL: 'https://jsse-2017.firebaseio.com',
  projectId: 'jsse-2017',
  storageBucket: 'jsse-2017.appspot.com',
  messagingSenderId: '277806525803'
}

firebase.initializeApp(config)