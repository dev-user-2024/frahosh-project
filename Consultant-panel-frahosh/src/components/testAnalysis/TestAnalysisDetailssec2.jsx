import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";

const TestAnalysisDetailssec2 = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid container mt={0}>
        <Grid item xs={12}>
          <Box             sx=
            {{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey.light
                  : "#FFFFFF",
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              width: "100%",
              height: "100vh",
            }}>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default TestAnalysisDetailssec2;
