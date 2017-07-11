import * as React from 'react'
import {firebaseConnect} from 'react-redux-firebase'
import * as firebase from 'firebase/app'
import {uidSelector} from '../../selectors/uid'
import {connect} from 'react-redux'
import {delay} from '../../utils'
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

      if (token) {
        await firebase.set(`users/${uid}/fcmToken`, token)
      }
    })

    // Manual refresh
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.ready
      const token = await messaging.getToken()
      if (!token) {
        return
      }
      if (uid) {
        await firebase.set(`users/${uid}/fcmToken`, token)
      } else {
        await delay(5000)
        const newUid = this.props.uid
        if (uid) {
          await firebase.set(`users/${newUid}/fcmToken`, token)
        }
      }
    }
  }

  render() {
    return null
  }
}
