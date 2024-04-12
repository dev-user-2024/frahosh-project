import { Grid, Box } from "@mui/material";
import React from "react";
import DashboardChart from "../../components/dashboard/DashboardChart";
import DailyNote from "../../components/dashboard/DailyNote";
import EarnedFaracoin from "../../components/dashboard/EarnedFaracoin";
import MySchedule from "../../components/dashboard/MySchedule";
import NotDoneTests from "../../components/dashboard/NotDoneTests";
import ReportCards from "../../components/dashboard/ReportCards";
import UncheckedAssignments from "../../components/dashboard/UncheckedAssignments";
import TestsSystem from "../../components/dashboard/TestsSystem";

export default function Dashboard() {
  return (
    <Box p={{ xs: 1, md: 2 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} mb={5} mt={3}>
        <Grid container item mt={3} spacing={{ xs: 1, md: 2 }}>
          <Grid container item xs={12} md={12} lg={7} spacing={2} mb={5}>
            <Grid container item xs={12} md={6}>
              <Grid item xs={12} mb={4}>
                <UncheckedAssignments />
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
            <Grid item xs={12} md={6}>
              <EarnedFaracoin faracoinNumber={"۱۲"} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ReportCards reportCard={"۸"} />
            </Grid>
            <Grid item xs={12}>
            <DashboardChart />
          </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={12} md={7}>
            <MySchedule />
          </Grid>
          <Grid item xs={12} md={5}>
          <TestsSystem />
        </Grid>
         
        </Grid>
      </Grid>
    </Box>
  );
}
