import { Grid, Box } from "@mui/material";
import React from "react";
import DashboardChart from "../../Components/dashboard/DashboardChart";
import DailyNote from "../../Components/dashboard/DailyNote";
import EarnedFaracoin from "../../Components/dashboard/EarnedFaracoin";
import MySchedule from "../../Components/dashboard/MySchedule";
import NotDoneTests from "../../Components/dashboard/NotDoneTests";
import ReportCards from "../../Components/dashboard/ReportCards";
import ReservedConsultation from "../../Components/dashboard/ReservedConsultation";
import TestsSystem from "../../Components/dashboard/TestsSystem";


export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={{ xs: 1, md: 2 }} mb={5} mt={3}>
        <Grid container item mt={3} spacing={{ xs: 1, md: 2 }}>
          <Grid container item xs={12} md={12} lg={7} spacing={2} mb={5}>
            <Grid container item xs={12} md={6}>
              <Grid item xs={12} mb={4}>
                <ReservedConsultation
                  date1={"22 آذر"}
                  date2={"10 دی"}
                  date3={"8 بهمن"}
                  name1={"علی حسینی"}
                  name2={"شیرین محمدزاده"}
                  name3={"محمد حسن پور"}
                />
              </Grid>

              <Grid item xs={12}>
                <NotDoneTests
                  date1={"22 آذر"}
                  date2={"10 دی"}
                  date3={"8 بهمن"}
                  lesson1={"ریاضی "}
                  lesson2={"اجتماعی"}
                  lesson3={"زبان انگلیسی"}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <DailyNote />
            </Grid>
          </Grid>

          <Grid container item xs={12} md={12} lg={5} spacing={2}>
            <Grid item xs={6} md={6}>
              <EarnedFaracoin faracoinNumber={"۱۲"} />
            </Grid>

            <Grid item xs={6} md={6}>
              <ReportCards reportCard={"۸"} />
            </Grid>

            <Grid item xs={12} md={12}>
              <TestsSystem />
            </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={12} md={7}>
            <MySchedule />
          </Grid>

          <Grid item xs={12} md={5}>
            <DashboardChart />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
