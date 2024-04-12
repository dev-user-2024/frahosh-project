import React, { Fragment } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  InputAdornment,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import {  SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import podcast from "../../assests/image/podcast.png";

const PlayListPodcast = () => {
  const [filter, setFilter] = useState(1);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Fragment>
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
        <Grid container spacing={1}>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={podcast} height="70px" width={70} />
                <Typography ml={1}>
                  اپیزود 24 : جمله سازی با گذشته استمراری
                </Typography>
              </Box>
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={podcast} height="70px" width={70} />
                <Typography ml={1}>
                  اپیزود 24 : جمله سازی با گذشته استمراری
                </Typography>
              </Box>
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={podcast} height="70px" width={70} />
                <Typography ml={1}>
                  اپیزود 24 : جمله سازی با گذشته استمراری
                </Typography>
              </Box>
              <Typography mr={2} variant="caption">
                26 شهریور 1401{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default PlayListPodcast;
