import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {firebaseConnect} from 'react-redux-firebase'
import * as firebase_ from 'firebase/app'
import {uidSelector} from '../../selectors/uid'
import {connect} from 'react-redux'
import {delay} from '../../utils'
import {IRootState} from '../../types'
const messaging = firebase_.messaging()

const mapStateToProps = (state: IRootState) => ({
  uid: uidSelector(state)
})

interface ITokenRefresherProps {
  firebase: any
  uid: string
}

class TokenRefresherImpl extends React.Component {
  public props: ITokenRefresherProps

  public async componentWillMount() {
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
        // Get new UID from new props
        const newUid = this.props.uid
        if (uid) {
          await firebase.set(`users/${newUid}/fcmToken`, token)
        }
      }
    }
  }

  public render() {
    return null
  }
}

export const TokenRefresher = flowRight(
  firebaseConnect(),
  connect(mapStateToProps)
)(TokenRefresherImpl)
