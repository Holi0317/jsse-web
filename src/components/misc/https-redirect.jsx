import * as React from 'react'

function _isLocalhost(hostname) {
  // !! coerces the logical expression to evaluate to the values true or false.
  return !!(hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
}

export class HttpsRedirect extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  componentWillMount() {
    if (window.location.protocol === 'http:' && !_isLocalhost(window.location.hostname)) {
      // Redirect to https: if we're currently using http: and we're not on localhost.
      window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
    }
  }

  render() {
    return null
  }
}
