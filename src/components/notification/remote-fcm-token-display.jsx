import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {shortFcmTokenSelector} from '../../selectors/short-fcm-token'

const mapStateToProps = state => ({
  fcmToken: shortFcmTokenSelector(state)
})

@firebaseConnect()
@connect(mapStateToProps)
export class RemoteFcmTokenDisplay extends React.Component {
  render() {
    const {fcmToken} = this.props
    return <div>FCM Token on cloud: {fcmToken}</div>
  }
}
