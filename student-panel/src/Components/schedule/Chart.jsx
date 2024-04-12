import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import { Box , Typography , Grid , Stack, IconButton } from '@mui/material';
import mapGide1 from "../../assests/image/svg/mapGide1.svg";
import mapGide2 from "../../assests/image/svg/mapGide2.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useState } from 'react';
function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          size={120}
          thickness={6}
          sx={{ color: "#1D9BF0" }}
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1" component="div">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
const Chart = () => {
    const [value, setValue] = useState(0);
    const [pageTitle, SetpageTitle] = useState("مشاور");
    const [Addstate, setAddState] = useState(false);
    const [userReason, SetuserReason] = useState();
    const [reasonToggle, SetReasonToggle] = useState(true);

    const addUserReasonInput = (event) => {
      let reason = event.target.value;
      console.log(userReason);
    };
    const DeleteNewReason = () => {
      SetReasonToggle(true);
    };
    return (
        <Box>
        <Grid
        container
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
          mb={2}
        >
          <Box mb={5}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
          دلایل عدم تحقق
        </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: "3px 3px 30px rgba(0, 0, 0, 0.08)",
              width: "100%",
              padding: "30px 20px",
              display: "flex",
            }}
          >
            <input
              style={{
                border: "none",
                background: "none",
                width: "100%",
              }}
              onChange={addUserReasonInput}
            />
            <IconButton onClick={DeleteNewReason}>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <SaveAltIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={5}
          sx={{ display: "flex", flexDirection: "column" }}
          mb={2}
        >
          <Box mb={5}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
          نمودار تحقق
        </Typography>
          </Box>
          <Stack direction="row" mb={2}>
            <img src={mapGide1} alt='' />
            <Typography ml={1}>انجام شده</Typography>
          </Stack>
          <Stack direction="row">
            <img src={mapGide2} alt='' />
            <Typography ml={1}>انجام نشده</Typography>
          </Stack>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} mt={5}>
            <CircularProgressWithLabel value={80} />
          </Grid>
        </Grid>
      </Grid>
        </Box>
      
    );
};

export default Chart;