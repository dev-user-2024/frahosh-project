import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import { MicOutlined, SearchOutlined } from "@mui/icons-material";
import podcast from "../../assests/image/podcast.png";

const NewPodcast = () => {
  const [filter, setFilter] = useState(1);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
        color: "text.secondary",
      }}
    >
      <Box
        mt={3}
        p={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <FormControl fullWidth variant="standard">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              onChange={handleChange}
              sx={{ border: "none", pl: "5px" }}
              defaultValue={30}
              size="small"
            >
              <MenuItem value={1}>همه</MenuItem>
              <MenuItem value={20}>جدید ترین</MenuItem>
              <MenuItem value={30}>پر بازدید ترین</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          id="filled-search"
          label="پادکست مورد نظرت رو جستجو کن .."
          type="search"
          sx={{
            mt: { xs: "10px", md: "0px" },
            ml: { xs: "10px", md: "50px" },
            width: { md: "60%" },
            p: "0",
          }}
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box mt={2} p={2}>
        <Typography fontWeight={800}>20 شهریور 1402</Typography>
        <Grid container mt={1} spacing={2}>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2} p={2}>
        <Typography fontWeight={800}>20 شهریور 1402</Typography>
        <Grid container mt={1} spacing={2}>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <Box>
              <img src={podcast} />
              <Typography>مصاحبه با علی محمدی رتبه یک ریاضی</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NewPodcast;
