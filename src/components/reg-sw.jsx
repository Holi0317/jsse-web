import * as React from 'react'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import {connect} from 'react-redux'

class DisconRegSW extends React.Component {
  componentWillMount() {
    const {setSW} = this.props
    if ('serviceWorker' in navigator) {
      const registration = runtime.register()
      setSW(registration)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  setSW(registration) {
    dispatch({
      type: 'SW/SET_SW',
      sw: registration
    })
  }
})

export const RegSW = connect(null, mapDispatchToProps)(DisconRegSW)