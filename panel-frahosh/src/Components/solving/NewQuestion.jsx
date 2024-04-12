import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";
const NewQuestion = () => {
  return (
    <Box>
      <Grid mt={2} container spacing={1} justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5}>
          <Typography mb={2}>درس</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">درس</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="درس"
              sx={{ height: "40px", borderRadius: "10px" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box mt={5} mb={2} display="flex" justifyContent="space-between">
            <Typography>فایل های مرتبط</Typography>
            <label htmlFor="upload_file">
              <input type="file" id="upload_file" style={{ display: "none" }} />
              <span
                style={{
                  padding: "8px 20px 8px 20px",
                  backgroundColor: "#1D9BF0",
                  color: "#fff",
                  borderRadius: "10px",
                }}
              >
                <FileUploadOutlined />
                آپلود فایل
              </span>
            </label>
          </Box>
          <Typography variant="caption">
            فایل مرتبط با سوال رو به صورت عکس یا PDF بارگزاری کن.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box>
            <Typography mb={2}>سوال</Typography>
            <textarea
              style={{
                width: "100%",
                height: "150px",
                borderRadius: "10px",
                backgroundColor: "#f6f9fa",
                padding:"8px",
                border:"1px solid #828282"
              }}
              id="filled-basic"
            />
          </Box>
        </Grid>
      </Grid>
      <Box pt={4} width='250px' margin='auto'>
      <Button  sx={{mr:"5px" , backgroundColor:"#1D9BF0"}} variant="contained" fullWidth>ارسال سوال</Button>
      </Box>
    </Box>
  );
};

export default NewQuestion;
