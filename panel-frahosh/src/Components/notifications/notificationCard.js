import { Padding } from '@mui/icons-material';
import { Paper,Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import React from 'react';

function NotificationCard(props) {
    const {roll, name, date, title, body}=props;
    console.log(roll);
    const currentTheme = useTheme();
    return (
        <Paper elevation={2}   
            sx={{
                padding:"16px",
                borderLeft:"8px solid #1D9BF0",
            }}>
            <Box
            sx={{
                display:"flex",
                gap:"10px",
                color:currentTheme.palette.grey.text
            }}>
                <Typography
                  variant='body2'
                  component='p' >
                  {roll}:
                </Typography>
                <Typography
                  variant='body2'
                  component='p' >
                  {name}
                </Typography>
                <Typography
                  variant='body2'
                  component='p' >
                  {date}
                </Typography>
            </Box>
            <Box
            sx={{
                  display:"flex",
                  gap:"10px",
                  marginTop:"20px",
            }}>
                <Typography
                  variant='body2'
                  component='p' >
                 عنوان:
                </Typography>
                <Typography
                  variant='body2'
                  component='p' >
                  {title}
                </Typography>
            </Box>
            <Box
             sx={{
                marginTop:"20px"
             }}>
                <Typography 
                 variant='blanditiis tenetur'
                 component=""
                >
                    {body}
                </Typography>
             </Box>
        </Paper>
    )
}

export default NotificationCard
