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
  componentWillMount() {
    const {firebase, uid} = this.props

    messaging.onTokenRefresh(async () => {
      const token = await messaging.getToken()
      console.log('Token:', token)

      await firebase.set(`users/${uid}/fcmToken`, token)
    })
  }

  render() {
    return null
  }
}