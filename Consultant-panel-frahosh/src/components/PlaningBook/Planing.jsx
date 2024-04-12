import React from "react";
import PlaningCalendar from "../../components/planingClaendar/PlaningCalendar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
const Planing = () => {
  const theme = useTheme();
  return (
    <div>
      <Grid width="100%" container columnSpacing={2} mt={4} alignItems="center">
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            مدرسه
          </Typography>
          <select className="input-style">
            <option>حضرت زهرا</option>
            <option>آیتی</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            مقطع
          </Typography>
          <select className="input-style">
            <option>دبیرستان اول</option>
            <option>دبیرستان دوم</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            پایه
          </Typography>
          <select className="input-style">
            <option>دهم</option>
            <option>یازدهم</option>
          </select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            شماره کلاس
          </Typography>
          <select className="input-style">
            <option>102</option>
            <option>102</option>
          </select>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
          >
            نام دانش آموز
          </Typography>
          <select className="input-style">
            <option>محمد علی بهارلویی</option>
            <option>سید رضا احمدی</option>
          </select>
        </Grid>
      </Grid>
      <Box display="flex" alignItems="center" mt={8} mb={2}>
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
            fontFamily: "Rokh-Bold",
            fontSize: "18px",
          }}
          textAlign="left" // Set text alignment to right
          fontWeight={700}
          variant="h5"
          component="p"
          flex="1" // Take remaining space
        >
         تعداد پیام‌های دانش آموز در این ماه: 33 پیام
        </Typography>
        <Typography
          sx={{
            color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
            fontFamily: "Rokh-Bold",
            fontSize: "18px",
          }}
          textAlign="right" // Set text alignment to right
          fontWeight={700}
          variant="h5"
          component="p"
          flex="1" // Take remaining space
        >
        تعداد پیام‌های والدین در این ماه: 12 پیام
        </Typography>
      </Box>
      <PlaningCalendar component={3} />
      <Box my={3}>
        <Typography
            sx={{
              color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
              fontFamily: "Rokh-Bold",
              fontSize: "20px",
              mb: 4,
            }}
            textAlign="left" // Set text alignment to right
            fontWeight={700}
            variant="h5"
            component="p"
            flex="1" // Take remaining space
          >
                    دوشنبه 17 اردیبهشت
          </Typography>
        <Accordion sx={{ mt: 2, background: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="text.secondary">پیام های مشاور</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 2, background: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header2"
          >
            <Typography color="text.secondary">پیام های والدین</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default Planing;
