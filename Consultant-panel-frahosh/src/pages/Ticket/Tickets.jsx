import { Box } from '@mui/material';
import React from 'react';
import TicketList from '../../components/ticket/TicketList';


const Tickets = () => {

    return (
        <Box p={{xs:1,md:2}}>
            <TicketList/>
        </Box>
    );
};

export default Tickets;