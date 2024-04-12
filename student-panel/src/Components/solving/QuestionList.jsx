import React from "react";
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
import { useState } from "react";
import { ArrowBackOutlined } from "@mui/icons-material";
import Answer from "./Answer";

const QuestionList = () => {
  const [title, settitle] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("list");
  const handleChangeTitle = (event) => {
    settitle(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Box>
      {type === "list" ? (
        <Box>
          <Box
            mt={3}
            p={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography width="110px" sx={{ color: "#1D9BF0" }}>
                انتخاب درس
              </Typography>
              <FormControl fullWidth>
                <InputLabel>درس</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={title}
                  label="درس"
                  onChange={handleChangeTitle}
                  defaultValue={1}
                  size="small"
                  sx={{ width: "200px" }}
                >
                  <MenuItem value={1}>همه</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography width="110px" sx={{ color: "#1D9BF0" }}>
                وضعیت
              </Typography>
              <FormControl fullWidth>
                <InputLabel>وضعیت</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="وضعیت"
                  onChange={handleChangeStatus}
                  defaultValue={1}
                  size="small"
                  sx={{ width: "200px" }}
                >
                  <MenuItem value={1}>همه</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box mt={2} p={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} mb={2}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                    padding: "8px",
                    cursor: "pointer",
                    backgroundColor: "background.paper",
                    boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                    color: "text.secondary",
                  }}
                  onClick={() => {
                    setType("answer");
                  }}
                >
                  <Typography mr={2} variant="caption">
                    26 شهریور 1401{" "}
                  </Typography>
                  <Typography>ریاضی</Typography>
                  <Typography variant="caption" color="#828282">
                    در انتظار پاسخ
                    <ArrowBackOutlined sx={{ ml: { md: "10px" } }} />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Answer type={type} setType={setType} />
      )}
    </Box>
  );
};

export default QuestionList;
