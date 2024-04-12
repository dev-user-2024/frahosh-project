import React from 'react';
import videojs from '../../../coins-section/video/video.jsx';
import VideoJS from '../../../coins-section/video/video';
import { Stack, Typography } from '@mui/material';
export default function Section1() {
    const playerRef = React.useRef(null);
  
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: 'https://www.aparat.com/v/DsRX0',
        type: 'video/mp4',
      }],
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
  
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };
    return (
        <Stack>
        <Typography sx={{fontFamily:"Rokh-Bold" , color:' #1D9BF0' , fontSize:"18px" , lineHeight:"23px" , marginBottom:"15px" , marginTop:"33px"}}>
        جلسه دوم ریاضی
        </Typography>
            <div>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
          </Stack>
          )
          }