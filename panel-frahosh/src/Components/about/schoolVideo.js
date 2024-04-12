import React, {Fragment} from 'react'
import TitleTypography from './title'
import video from "./__test__.mp4"
export default function SchoolVideo() {
  return (
    <Fragment>
        <TitleTypography >ویدیو معرفی مدرسه</TitleTypography>
        <video width="100%" height="100%" controls>
          <source src={video} type="video/mp4" />
        </video>
    </Fragment>
  )
}
