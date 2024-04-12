import React from 'react';
import { Box } from '@mui/material';
import NewMeeting from '../../components/meeting/NewMeeting';
import MeetingList from '../../components/meeting/MeetingList';
const Meeting = () => {
    return (
        <Box p={{xs:1,md:2}}>
            <NewMeeting/>
            <MeetingList/>
        </Box>
    );
};

export default Meeting;