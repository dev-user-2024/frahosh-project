import { Grid } from '@mui/material'
import Avatr from '../../../../general/Avatar'
import { Link } from 'react-router-dom'
import * as Styled from './styled'

const StudentInfo = () => {
  return (
    <div>
      <Styled.StudentInfo container>
        <Grid item xs={3}>
          <Avatr size='medium' />
          <span>مدرسه فروغ دانش</span>
        </Grid>
        <Grid item xs={3}>
          <p>کد مدرسه</p>
          <span>2010</span>
        </Grid>
        <Grid item xs={3}>
          <p>تاریخ فعال سازی</p>
          <span>1402/02/01</span>
        </Grid>
        <Grid item xs={3}>
          <p>وضعیت فعالیت</p>
          <span>فعال</span>
        </Grid>
      </Styled.StudentInfo>
      <Styled.StudentInfoBody container xs={12}>
        <Grid item sm={12} md={5}>
          <div>
            <h2>36</h2>
            <p>تعداد کاربر معلم</p>
          </div>
          <p>
            <Link to="#">مشاهده لیست</Link>
          </p>
        </Grid>
        <Grid item sm={12} md={5}>
          <div>
            <h2>36</h2>
            <p>تعداد کاربر معلم</p>
          </div>
          <p>
            <Link to="#">مشاهده لیست</Link>
          </p>
        </Grid>
        <Grid item sm={12} md={5}>
          <div>
            <h2>36</h2>
            <p>تعداد کاربر معلم</p>
          </div>
          <p>
            <Link to="#">مشاهده لیست</Link>
          </p>
        </Grid>
        <Grid item sm={12} md={5}>
          <div>
            <h2>36</h2>
            <p>تعداد کاربر معلم</p>
          </div>
          <p>
            <Link to="#">مشاهده لیست</Link>
          </p>
        </Grid>
      </Styled.StudentInfoBody>
    </div>
  )
}

export default StudentInfo