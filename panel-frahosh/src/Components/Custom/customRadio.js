import * as React from 'react';
import Radio, { RadioProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const SqureRadio = styled(Radio)<RadioProps>(({ theme }) => ({
  width: 300,
  color:"red",
//   '& .MuiSlider-thumb': {
//     '&:hover, &.Mui-focusVisible': {
//       boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//     '&.Mui-active': {
//       boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//   },
}));

export default function CustomRadio() {
  return <SqureRadio />;
}