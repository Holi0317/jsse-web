import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {dispFootageImgSelector} from '../../selectors/disp-footage-img'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'

const mapStateToProps = state => ({
  imgUrl: dispFootageImgSelector(state),
  time: dispFootageTimeSelector(state)
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps)
export class FootageImg extends React.Component {
  render() {
    const {imgUrl, time} = this.props
    if (imgUrl && time) {
      return <img height="480px" src={imgUrl} alt={time.calendar()} />
    }
    return null
  }
}
