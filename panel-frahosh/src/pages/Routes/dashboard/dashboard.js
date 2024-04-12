import { Grid,Container } from '@mui/material'
import React from 'react'
import DashboardChart from '../../../Components/dashboard/DashboardChart'
import DailyNote from '../../../Components/dashboard/DailyNote'
import EarnedFaracoin from '../../../Components/dashboard/EarnedFaracoin'
import MySchedule from '../../../Components/dashboard/MySchedule'
import NotDoneTests from '../../../Components/dashboard/NotDoneTests'
import ReportCards from '../../../Components/dashboard/ReportCards'
import ReservedConsultation from '../../../Components/dashboard/ReservedConsultation'
import TestsSystem from '../../../Components/dashboard/TestsSystem'
import { useSelector } from 'react-redux'
import axios from "axios";
import { serverApi } from "../../../confing/confing";



export default function Dashboard() {
    const auth = useSelector((state)=>state.auth);
    // console.log(auth);

//     let formData = new FormData();
// formData.append('mobile', '09029227244');
// formData.append('password', '123456');
// const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
// }

//   const fetchdata =  async () =>{
//     try{
//         const token = await axios.post(`${serverApi}v1/user-auth/user-login`,formData,config)
//         console.log("token reciveddd")
//         console.log(token)
//         console.log(token.data)

//     }catch(err){
//         console.log(err)
//     }
// }
// fetchdata()
  return (
    
        <Container >
            <Grid container spacing={4} mb={5}>
            <Grid container item mt={3} spacing={4}>

                <Grid container item xs={12}  md={7} spacing={4}>

                    <Grid container item xs={6}>

                        <Grid item xs={12} mb={4}>
                            <ReservedConsultation date1={"22 آذر"} date2={"10 دی"} date3={"8 بهمن"} name1={"علی حسینی"} name2={"شیرین محمدزاده"} name3={"محمد حسن پور"} />
                        </Grid>

                        <Grid item xs={12}>
                            <NotDoneTests  date1={"22 آذر"} date2={"10 دی"} date3={"8 بهمن"} lesson1={"ریاضی "} lesson2={"اجتماعی"} lesson3={"زبان انگلیسی"} />
                        </Grid>
                        
                    </Grid>

                    <Grid item xs={6}>
                        <DailyNote />
                    </Grid> 

                </Grid>
            
                <Grid container item xs={12}  md={5} spacing={4}> 

                        <Grid item xs={6}>
                            <EarnedFaracoin  faracoinNumber={"۱۲"} />

                        </Grid>

                        <Grid item xs={6}>
                            <ReportCards  reportCard={"۸"}/>
                        </Grid>

                        <Grid item xs={12}>
                            <TestsSystem />
                        </Grid>

                </Grid>

            </Grid>

            <Grid container item spacing={4}>
                <Grid item xs={12}  md={7} >
                    <MySchedule />
                            
                </Grid>

                <Grid item xs={12}  md={5} >
                       <DashboardChart />     
                </Grid>
            </Grid>

            </Grid>
        </Container>
    
  )
}
