import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { Box,Grid, Icon, IconButton } from '@mui/material';
import {styled} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

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
function BpRadio(props) {
  return (
    <Checkbox
      disableRipple
      disabled
      color="default"
      variant="solid"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}


export default function AddSchedule(props) {
    const {onSaveClick,onDeleteClick}=props
    
  return (
    <Box sx={{ width: '100%' }} mb="1rem">
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
        <BpRadio />
        <Box sx={{boxShadow:"3px 3px 30px rgba(0, 0, 0, 0.08)",width:"100%",padding:"30px 20px",display:"flex"}}>
            <input style={{border:"none",background:"none",width:"100%"}}></input>
            <IconButton onClick={onDeleteClick} ><DeleteIcon /></IconButton>
            <IconButton onClick={onSaveClick}><SaveAltIcon /></IconButton>
        </Box>
      </Stack>
  </Box>

  )
}
