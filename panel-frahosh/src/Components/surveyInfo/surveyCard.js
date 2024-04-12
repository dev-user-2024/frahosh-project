import { Subtitles } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import link from '../../assests/image/svg/link.svg'
import { Link } from 'react-router-dom'

function SurveyCard(props) {
    const {date,title , id}=props
    const href = `/surveyquestion/${id}`
    console.log(href)
    return (
        <Paper
        sx={{
            display:"flex",
            justifyContent:"space-between",
            padding:"25px"

        }}>
            <Box>
                <Typography
                 variant='subtitle1'
                 component='p'
                >
                    {date}
                </Typography>
            </Box>
            <Box>
                <Typography
                 variant='subtitle1'
                 component='p'
                >
                    {title}
                </Typography>
            </Box>
            <Box>
              <Link to={href}
               >
                <img src={link}/>
               </Link>
            </Box>
            
        </Paper>
        
    )
}

export default SurveyCard
