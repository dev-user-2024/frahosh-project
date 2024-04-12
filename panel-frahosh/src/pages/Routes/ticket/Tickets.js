import React from 'react'
import Ticket from '../../../Components/ticket/ticket'
import styles from './ticket.module.css'
import {Container, Paper, Stack} from '@mui/material'
import TitleTypography from '../../../Components/about/title'
import { Link } from 'react-router-dom'

export default function Tickets() {
  return (
  <Container mb={3}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} mt={3}>
            <TitleTypography>تیکت‌های ارسال شده</TitleTypography>
            <Link to='/newtickets'>
              <button className={styles.addTicket}>+ ثبت تیکت جدید</button>
            </Link>
    </Stack>
    <Ticket   date={"۲۰ مرداد ۱۴۰۱"} title={"ریاضی"} status={"در انتظار پاسخ"}   />
    <Ticket   date={"۲۰ مرداد ۱۴۰۱"} title={"زبان انگلیسی"} status={"پاسخ داده شده"}   />
    </Container>
  )
}
