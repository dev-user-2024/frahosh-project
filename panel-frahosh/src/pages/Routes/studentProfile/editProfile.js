import React from 'react'
import { Grid,Stack,Typography,Breadcrumbs, Container, Box, FormControl} from '@mui/material'
import Button from '../../../Components/buttons/button.component'
import EditStudentInfo from '../../../Components/studentProfile/editprofile/EditStudentInfo'
import EditMotherInfo from '../../../Components/studentProfile/editprofile/EditMotherInfo'
import EditFatherInfo from '../../../Components/studentProfile/editprofile/EditFatherInfo'
import studentPhoto from '../../../assests/image/avatar/Ellipse 82.svg'












export default function EditProfile() {

  return (
    <Container>
    <FormControl>
      <Stack justifyContent="end" direction="row" spacing={3}>
          <Button buttonType="editstudentprofile">ذخیره تغییرات<img src='' /></Button>
          <Button buttonType="editstudentprofile">انصراف<img src='' /></Button>
      </Stack>
      <EditStudentInfo name={"مازیار محمدپور"} birthday={""} grade={"هفتم- متوسطه اول"} studentPhoto={studentPhoto} />
      <Stack direction={{xs:"column", md:"row"}} justifyContent="space-between" mt={4} >
          <EditFatherInfo name={"کامران"} age={"43"} education={"کارشناسی"} job={"کارمند بانک"} phoneNamber={"09123456789"}/>
          <EditMotherInfo name={"مریم ربیعی"} age={"43"} education={"کارشناسی"} job={"معلم ابتدایی"} phoneNamber={"09123456789"}/>
      </Stack>
    </FormControl>
   </Container>
  )
}
