import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  width: 24,
  height: 24,
  border: "1px solid #828282",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#1D9BF0",
  "&:before": {
    display: "block",
    width: 0,
    height: 0,
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      variant="solid"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const SurveyQuestion = ({ qus, index }) => {
  return (
    <div>
      <FormControl
        sx={{
          marginTop: "2rem",
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <Grid container>
            <Grid item xs={12} mb={2}>
              <Typography>
                {index}- {qus.question_text}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControlLabel
                value={qus.option_1}
                control={<BpRadio />}
                label={qus.option_1}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControlLabel value={qus.option_2} control={<BpRadio />} label={qus.option_2} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControlLabel
                value={qus.option_3}
                control={<BpRadio />}
                label={qus.option_3}
                variant="solid"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControlLabel
                value={qus.option_4}
                control={<BpRadio />}
                label={qus.option_4}
                variant="solid"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SurveyQuestion;
