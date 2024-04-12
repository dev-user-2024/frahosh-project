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
const HomePodcast = () => {
  const [title, settitle] = useState("");

  const handleChange = (event) => {
    settitle(event.target.value);
  };
  return (
    <Box sx={{backgroundColor:"#fff"}}>
      <Box mt={3} p={1} sx={{ display: "flex", flexDirection : {xs:"column" , md:"row"}, width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography noWrap sx={{ color: "#1D9BF0" }}>
            انتخاب موضوع:{" "}
          </Typography>
          <FormControl>
            <InputLabel>موضوع</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={title}
              label="موضوع"
              onChange={handleChange}
              sx={{ width: "150px" }}
              defaultValue={1}
              size="small"
            >
              <MenuItem value={1}>همه</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          id="filled-search"
          label="پادکست مورد نظرت رو جستجو کن .."
          type="search"
          sx={{mt: {xs:"10px",md:"0px"}, ml: {md:"50px"}, width: {md:"60%"}, p: "0" }}
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
        <Typography fontWeight={800}>تازه ترین اپیزود ها</Typography>
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
        <Typography fontWeight={800}>محبو ترین ترین اپیزود ها</Typography>
        <Grid mt={1} container spacing={2}>
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
    </Box>
  );
};

export default HomePodcast;
