import React from 'react';
import { Grid, Box , Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
const ConsultationsDone = ({list}) => {
    return (
        <Grid container spacing={2} mt={1}>
        {list.map((i, index) => (
          <Grid item xs={12} key={index}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: "background.paper",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: "text.secondary",
              }}
            >
              <Typography>
                {" "}
                {new Intl.DateTimeFormat("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(i.date_reserve))}
              </Typography>
              <Typography>
              {new Intl.DateTimeFormat("fa-IR", {
                hour:"2-digit",
                minute:"2-digit"
              }).format(new Date(i.clock_meet))}
              </Typography>
              <Typography>
             {i.type}
              </Typography>
              <Link to="1">
                <Typography display="flex" alignItems="center">
                  مشاهده جزییات
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
};

export default ConsultationsDone;