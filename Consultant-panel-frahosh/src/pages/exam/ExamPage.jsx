import React from 'react';
import ExamHeader from '../../components/exam/ExamHeader';
import { Box } from '@mui/material';
import ExamFiltering from '../../components/exam/ExamFiltering';
import ExamList from '../../components/exam/ExamList';
const ExamPage = () => {
    return (
        <Box p={{xs:1,md:2}}>
            <ExamHeader/>
            <ExamFiltering/>
            <ExamList/>
        </Box>
    );
};

export default ExamPage;