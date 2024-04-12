import React from 'react';
import { Box,Grid,Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const HeartWritten = () => {
    return (
        <Box mb={3}>
        <Stack
          direction="row"
          justifyContent="right"
          alignItems="center"
          mb={2}
          mt={3}
        >
          <Link to="">
            <Button variant="contained">+ دلنوشته جدید</Button>
          </Link>
        </Stack>
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
              <Link to="1">
                <Typography
                  display="flex"
                  alignItems="center"
                >
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
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
            <Link to="1">
              <Typography
                display="flex"
                alignItems="center"
              >
                <ArrowBack />
              </Typography>
            </Link>
          </Box>
        </Grid>
        </Grid>
      </Box>
    );
};

export default HeartWritten;