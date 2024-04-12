import React from "react";
import { Box, Typography, Grid } from "@mui/material";
const ScoresList = () => {
  return (
    <div>
      <Typography
        variant="h6"
        color="text.primary"
        fontWeight={700}
        sx={{ mr: 2 }}
      >
        درس ریاضی
      </Typography>
      <Grid container spacing={2} mt={3}>
      <Grid item xs={12}>
        <Box
          display="flex"
          p={2}
          justifyContent="space-between"
          sx={{
            backgroundColor: 'background.paper',
            boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
            color: 'text.secondary'
          }}
        >
          <Typography>22 مرداد 1402</Typography>
          <Typography>میانترم</Typography>
          <Typography>10از  15</Typography>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
};

export default ScoresList;
