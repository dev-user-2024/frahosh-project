import React from 'react'
import { Grid,Stack,Typography,Breadcrumbs, Container, Box } from '@mui/material'
import Button from '../../../Components/buttons/button.component'
import FatherInfo from '../../../Components/studentProfile/profile/FatherInfo'
import MotherInfo from '../../../Components/studentProfile/profile/MotherInfo'
import StudentInfo from '../../../Components/studentProfile/profile/StudentInfo'
import studentPhoto from '../../../assests/image/avatar/Ellipse 82.svg'
import { Link } from 'react-router-dom'
import { useEffect , useState } from "react";
import { serverApi , token } from '../../../confing/confing';
import axios from "axios";

export default function Profile() {
  const [info,setInfo] = useState({})
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}users/info`, { headers: { authorization: `Bearer ${token}` }});
        // console.log(data)
        setInfo(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
    <Stack alignItems="end">
      <Link to="/editprofile">
        <Button buttonType="editstudentprofile">ویرایش اطلاعات<img src='' /></Button>
        </Link>
    </Stack>
    <StudentInfo info={info}/>
    <Stack direction={{xs:"column", md:"row"}} justifyContent="space-between" mt={4} >
        <FatherInfo name={"کامران"} age={"43"} education={"کارشناسی"} job={"کارمند بانک"} phoneNamber={"09123456789"}/>
        <MotherInfo name={"مریم ربیعی"} age={"43"} education={"کارشناسی"} job={"معلم ابتدایی"} phoneNamber={"09123456789"}/>
    </Stack>
   </Container>
  )
}
