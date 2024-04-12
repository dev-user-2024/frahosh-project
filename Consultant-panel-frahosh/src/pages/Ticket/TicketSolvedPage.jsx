import { Box } from "@mui/material";
import React from "react";
import TicketSolved from "../../components/ticket/TicketSolved";

const TicketSolvedPage = () => {
  return (
    <Box  p={{xs:1,md:2}}>
      <TicketSolved />
    </Box>
  );
};

export default TicketSolvedPage;
