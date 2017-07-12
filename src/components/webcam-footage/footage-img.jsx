import * as React from 'react'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import {dispFootageImgSelector} from '../../selectors/disp-footage-img'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'
import {FBStorageImage} from '../fb-storage-image'

const mapStateToProps = state => ({
  imgPath: dispFootageImgSelector(state),
  time: dispFootageTimeSelector(state)
})

@firebaseConnect([
  '/footage'
])
@connect(mapStateToProps)
export class FootageImg extends React.Component {

  render() {
    const {imgPath, time} = this.props
    if (imgPath && time) {
      return <FBStorageImage height="480px" width="720px" path={imgPath} alt={time.calendar()} />
    }
    return null
  }
}
