import React from 'react';
import CorrectionFilternig from '../../components/correction/CorrectionFilternig';
import { Box } from '@mui/material';
import CorrectionList from '../../components/correction/CorrectionList';
const CorrectionPage = () => {
    return (
        <Box  p={{xs:1,md:2}}>
            <CorrectionFilternig/>
            <CorrectionList/>
        </Box>
    );
};

export default CorrectionPage;