import {FormControlLabel ,Radio,RadioGroup,FormControl, Typography} from '@mui/material'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/material';
import React from 'react'

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 5,
    width: 24,
    height: 24,
    border: "1px solid #828282",  
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#1D9BF0",
    '&:before': {
      display: 'block',
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
function SurveyQuestionCard(props) {
    const {question,questionanswer1,questionanswer2,questionanswer3,questionanswer4}=props;
    console.log(question)
    return (
        <FormControl
        sx={{
            marginTop:"2rem"
        }}>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group">
             <Grid container  >
                <Grid item xs={12}
                mb={2}>
                    <Typography>۱- {question}</Typography>
                </Grid>
                <Grid item xs={12}  sm={12} md={6} lg={6} xl={6}>
                  <FormControlLabel value={questionanswer1} control={<BpRadio />} label={questionanswer1}   />
                </Grid>
                <Grid item xs={12}  sm={12} md={6} lg={6} xl={6}   
               >
                 <FormControlLabel value={questionanswer2} control={<BpRadio />} label={questionanswer2}  />
                </Grid>
                <Grid item xs={12}  sm={12} md={6} lg={6} xl={6}>
                   <FormControlLabel value={questionanswer3} control={<BpRadio />} label={questionanswer3} variant="solid" />
                </Grid>
                <Grid item xs={12}  sm={12} md={6} lg={6} xl={6} >
                    <FormControlLabel value={questionanswer4} control={<BpRadio />} label={questionanswer4} variant="solid" />
                </Grid>
              </Grid> 
        </RadioGroup>
        </FormControl>
    )
}

export default SurveyQuestionCard
