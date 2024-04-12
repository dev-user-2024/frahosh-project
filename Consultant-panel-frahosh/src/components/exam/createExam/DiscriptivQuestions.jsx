import React from 'react';
import FrahoshQuestions from '../Questions/tashrihi/FrahoshQuestions';
import TeacherQuestion from '../Questions/tashrihi/TeacherQuestion';
import MixedQuestions from '../Questions/tashrihi/MixedQuestions';
import { Box, Button } from '@mui/material';
const DiscriptivQuestions = ({pattern , setStep}) => {
    return (
        <div>
        {
            pattern.source == 1 ?  <FrahoshQuestions/> :
            pattern.source == 2 ?  <TeacherQuestion/> : 
            pattern.source == 3 ?  <MixedQuestions/> : "" 
        }
        <Box
        width="100%"
        display="flex"
        justifyContent="center"
        mt="200px"
        mb={3}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "200px", ml: 2 }}
          onClick={()=>{setStep(4)}}
        >
          مرحله بعد
        </Button>
      </Box>
    </div>
    );
};

export default DiscriptivQuestions;