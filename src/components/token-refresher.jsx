import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import * as firebase from 'firebase/app'
import {uidSelector} from '../selectors/uid'
import {connect} from 'react-redux'
const messaging = firebase.messaging()

const mapStateToProps = state => ({
  uid: uidSelector(state)
})

@firebaseConnect()
@connect(mapStateToProps)
export class TokenRefresher extends React.Component {
  async componentWillMount() {
    const {firebase, uid} = this.props

    messaging.onTokenRefresh(async () => {
      const token = await messaging.getToken()
      console.log('Token:', token)

      await firebase.set(`users/${uid}/fcmToken`, token)
    })

    // Manual refresh
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.ready
      const token = await messaging.getToken()
      await firebase.set(`users/${uid}/fcmToken`, token)
    }
  }

  render() {
    return null
  }
}