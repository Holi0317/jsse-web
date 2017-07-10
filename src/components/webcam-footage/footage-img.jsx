import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {footageImgSelector} from '../../selectors/footage-img'
import {footageTimeSelector} from '../../selectors/footage-time'

const mapStateToProps = state => ({
  imgUrl: footageImgSelector(state),
  time: footageTimeSelector(state)
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps)
export class FootageImg extends React.Component {
  render() {
    const {imgUrl, time} = this.props
    if (imgUrl && time) {
      return <img src={imgUrl} alt={time.calendar()} />
    }
    return null
  }
}
