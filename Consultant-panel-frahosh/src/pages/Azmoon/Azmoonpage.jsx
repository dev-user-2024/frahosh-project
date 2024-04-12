import React from 'react';
import CorrectionFilternig from '../../components/azmoon/AzmoonFilternig';
import { Box } from '@mui/material';
import CorrectionList from '../../components/azmoon/Azmooncategory';
const CorrectionPage = () => {
    return (
        <Box  p={{xs:1,md:2}}>
            <CorrectionFilternig/>
            <CorrectionList/>
        </Box>
    );
};

export default CorrectionPage;