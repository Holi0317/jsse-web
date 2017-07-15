import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {shortFcmTokenSelector} from '../../selectors/short-fcm-token'
import {IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  fcmToken: shortFcmTokenSelector(state)
})

interface IRemoteFcmTokenDisplayProps {
  fcmToken: string
}

function RemoteFcmTokenDisplayImpl({fcmToken}: IRemoteFcmTokenDisplayProps) {
  return <div>FCM Token on cloud: {fcmToken}</div>
}

export const RemoteFcmTokenDisplay = flowRight(
  firebaseConnect(),
  connect(mapStateToProps)
)(RemoteFcmTokenDisplayImpl)
