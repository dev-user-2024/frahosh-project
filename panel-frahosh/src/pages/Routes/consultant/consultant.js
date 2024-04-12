import React, { useState } from 'react'
import { Box, Container, Stack} from '@mui/material'
import Consultants from '../../../Components/consultant/mainConsultant/consultants'
import TitleTypography from '../../../Components/consultant/title'
import SearchConsultants from '../../../Components/consultant/mainConsultant/searchConsultants'
import ReservedConsltants from '../../../Components/consultant/mainConsultant/reservedConsltants'
import DoneConsultants from '../../../Components/consultant/mainConsultant/DoneConsultant'
import axios from 'axios'
import { serverApi , token } from "../../../confing/confing";
import { element } from 'prop-types'

export default function Consultant() {
  const [info , setInfo ] = useState([])
  const [reserve , setReserv ] = useState([])
  const [end , setEnd ] = useState([])
  useState(()=>{
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        // console.log(data);
        setInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }
  )
  useState(()=>{
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}reserved/consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data)
        setReserv(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }
  )
  useState(()=>{
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}end/consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data)
        setEnd(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }
  )
  return (
    <Box ml={4} mb={3}>
    <SearchConsultants/>
    <TitleTypography >مشاوران</TitleTypography>
      <Stack direction="row" spacing={2} my={3} overflow="scroll">
      {info.map(element => {
        {/* console.log(element) */}
        return(
          <Consultants consultantName={`${element.Fname} ${element.Lname}`}  consultantImage={element.avatar} />
        )
      })}
          
      </Stack>
    <TitleTypography >مشاوره های رزرو شده</TitleTypography>
    <Stack direction="column" spacing={2} mt={3} mb={3}>
    {
      reserve.map(element => {
      console.log(element)
      return(
        <ReservedConsltants reservedDate={element.date_reserve} consultantName={element.username  | "مینا علی‌پور"} remainedDay={element.time} link={element.meeting_link} />
      )})
    }
    </Stack>
    <TitleTypography >مشاوره‌های انجام شده</TitleTypography>
    <Stack direction="column" spacing={2} mt={3}>
    {
      reserve.map(element => {
      console.log(element)
      return(
        <DoneConsultants doneDate={element.date_reserve} consultantName={element.username  | "مینا علی‌پور"} detail={element.description}/>
      )})
    }
    </Stack>
        {/* <CounselingSession date={"۱۵ شهریور ۱۴۰۱"} time={"ساعت ۴ عصر"} period={"۱۵ دقیقه"}  connectionType={"تصویری"}  coast={"۱۲۵ هزار تومان"} consulatantName={"علی حسینی"}/> */}

      </Box>
  )
}
