import { Box } from "@mui/material";
import React from "react";
import MeetingsHeld from "../../Components/sessions/MeetingsHeld";
import MeetingInfo from "../../Components/sessions/MeetingInfo";

const Sessions = () => {
  return (
    <Box>
      <MeetingInfo />
      <MeetingsHeld />
    </Box>
  );
};

export default Sessions;
