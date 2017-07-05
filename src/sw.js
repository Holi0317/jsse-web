/* eslint-env serviceworker */
/* global firebase */

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '277806525803'
})

const messaging = firebase.messaging()

console.log('Service worker registered')