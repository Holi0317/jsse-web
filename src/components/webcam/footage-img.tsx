import * as React from 'react'
import flowRight from 'lodash-es/flowRight'
import {connect} from 'react-redux'
import {firebaseConnect} from 'react-redux-firebase'
import * as moment from 'moment'
import {dispFootageImgSelector} from '../../selectors/disp-footage-img'
import {dispFootageTimeSelector} from '../../selectors/disp-footage-time'
import {FBStorageImage} from '../fb-storage-image'
import styles from './footage-img.css'
import {IRootState} from '../../types'

const mapStateToProps = (state: IRootState) => ({
  imgPath: dispFootageImgSelector(state),
  time: dispFootageTimeSelector(state)
})

interface IFootageImgProps {
  imgPath: string | null
  time: moment.Moment | null
}

function FootageImgImpl({imgPath, time}: IFootageImgProps) {
  if (imgPath && time) {
    return (
      <div className={styles.imgContainer}>
        <FBStorageImage height="480px" width="720px" path={imgPath} alt={time.calendar()} />
      </div>
    )
  }
  return null
}

export const FootageImg = flowRight(
  firebaseConnect([
    '/footage'
  ]),
  connect(mapStateToProps)
)(FootageImgImpl)
