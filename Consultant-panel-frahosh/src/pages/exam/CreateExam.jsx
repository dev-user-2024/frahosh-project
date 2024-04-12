import React from 'react';
import { Box } from '@mui/material';
import Steps from '../../components/exam/createExam/Steps';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExamInfo from '../../components/exam/createExam/ExamInfo';
import LessonInfo from '../../components/exam/createExam/LessonInfo';
import TestQuestions from '../../components/exam/createExam/TestQuestions';
import DiscriptivQuestions from '../../components/exam/createExam/DiscriptivQuestions';
import CombinatorialQuetion from '../../components/exam/createExam/CombinatorialQuetion';
import { examContext } from '../../context/examContext';
import ExamConditions from '../../components/exam/createExam/ExamConditions';
import FinalAndSend from '../../components/exam/createExam/FinalAndSend';
const CreateExam = () => {
    const [step, setStep] = useState(1);
    const { state } = useLocation();
    const [pattern,setPattern]= useState({})
    return (
       <examContext.Provider
       value={{
        pattern,
        setPattern
       }}
       >
       <Box px={{xs:1,md:2}}>
       <Steps step={step}/>
      <Box sx={{backgroundColor:"#fff"}}  >
      {
       step === 1 ? <ExamInfo type={state} setPattern={setPattern} setStep={setStep} /> : 
       step === 2 ? <LessonInfo type={state} setPattern={setPattern} setStep={setStep} /> : 
       step === 3 ? <Box>
       {
           pattern.examtType === 'test' ? <TestQuestions pattern={pattern} setStep={setStep}/> : 
           pattern.examtType === 'descriptive' ? <DiscriptivQuestions pattern={pattern} setStep={setStep}/> :
           pattern.examtType === 'combinatorial' ? <CombinatorialQuetion pattern={pattern} setStep={setStep}/> : "ss"
       }
       
       </Box> : 
       step === 4 ? <ExamConditions type={state} setPattern={setPattern} setStep={setStep} /> : 
       step === 5 ? <FinalAndSend type={state} setPattern={setPattern} setStep={setStep} /> : ""

     }
      </Box>
   </Box>
       </examContext.Provider>
    );
};

export default CreateExam;