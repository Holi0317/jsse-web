import * as React from 'react'
import * as firebase from 'firebase/app'
const storage = firebase.storage()

export class FBStorageImage extends React.Component {
  state = {
    src: null
  }

  componentWillReceiveProps(newProps) {
    if (newProps.path !== this.props.path) {
      this.update(newProps.path)
    }
  }

  componentWillMount() {
    this.update(this.props.path)
  }

  update = path => {
    storage.ref(path).getDownloadURL().then(url => {
      this.setState({
        src: url
      })
    })
  }

  render() {
    const {src} = this.state
    // eslint-disable-next-line no-unused-vars
    const {path, ...rest} = this.props
    if (src) {
      return <img {...rest} src={src} />
    }
    return null
  }
}
