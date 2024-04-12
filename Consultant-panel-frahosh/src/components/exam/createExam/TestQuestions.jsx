import React from 'react';
import FrahoshQuestions from '../Questions/Testi/FrahoshQuestions';
import TeacherQuestion from '../Questions/Testi/TeacherQuestion';
import MixedQuestions from '../Questions/Testi/MixedQuestions';
import { Box, Button } from '@mui/material';
const TestQuestions = ({pattern , setStep}) => {
    console.log(pattern.source)
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

export default TestQuestions;