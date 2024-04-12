import { Box } from '@mui/material';
import React from 'react';
import TestDone from '../../Components/exams/TestDone';
import TestNotDone from '../../Components/exams/TestNotDone';

const Exams = () => {
    return (
        <Box>
            <TestNotDone/>
            <TestDone/>
        </Box>
    );
};

export default Exams;