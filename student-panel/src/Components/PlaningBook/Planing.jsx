import React from "react";
import PlaningCalendar from "../../Components/planingClaendar/PlaningCalendar";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Planing = () => {
  return (
    <div>
      <PlaningCalendar component={3} />
      <Box my={3}>
        <Typography variant="h6" color="text.primary" fontWeight={700}>
          دوسنبه 17 اردیبهشت
        </Typography>
        <Accordion sx={{mt:2, background:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography  color="text.secondary" >
        پیام های مشاور
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mt:2, background:"none"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header2"
      >
      <Typography  color="text.secondary" >
      پیام های والدین
    </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
      </Box>
    </div>
  );
};

export default Planing;
