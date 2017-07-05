import * as React from 'react'
import * as firebase from 'firebase/app'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {connect} from 'react-redux'
const messaging = firebase.messaging()

const mapDispatchToProps = dispatch => ({
  setSW(registration) {
    dispatch({
      type: 'SW/SET_SW',
      sw: registration
    })
  }
})

@connect(null, mapDispatchToProps)
export class RegSW extends React.Component {
  async componentWillMount() {
    const {setSW} = this.props
    if ('serviceWorker' in navigator) {
      const registration = runtime.register()
      setSW(registration)
      const reg = await registration
      messaging.useServiceWorker(reg)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}
