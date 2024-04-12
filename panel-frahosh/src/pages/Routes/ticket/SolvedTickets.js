import { Container } from '@mui/material'
import React from 'react'
import SolvedTicket from '../../../Components/ticket/solvedTicket'

export default function SolvedTickets() {
  return (
    <Container >
        <SolvedTicket status={"پاسخ داده شده"} sendingTicketDate={"30 تیر 1401"} lesson={"ریاضی"} question={"عدد 12 به توان منفی 2 رو چطور می تونم حساب کنم؟"} ticketTitle={"محاسبه توان منفی"} receiveTicketDate={"30 تیر 1401"} priority={"بالا"} answer={"توان منفی نیز با کمی تغییرات، تعریف مشابهی با توان مثبت دارد. اما در حالت کلی می‌توان گفت که توان منفی در واقع مخالف توان مثبت است. راه حل تشریحی در قسمت فایل‌های مرتبط پیوست شده."} />
    </Container>
  )
}
