import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import videojs from 'video.js';
import VideoJS from './video';
import styles from './video.styles.module.css';

export default function Video() {
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
    راهنمای کسب فراکوین
    </Typography>
        <div style={{width:"547px"}}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <div className={styles.text_bg}>
        <Typography sx={{
          fontFamily: 'IRANSansX', margin: '20px', width: '514.33px', height: '297px', fontStyle: 'normal', fontSize: '14px', lineHeight: '235%',
        }}
        >
          <p>
            راه‌های ساده و مختلفی برای به‌دست آوردن فراکوین وجود داره که به صورت لیست در ادامه می‌تونی ببینی؛
          </p>
          <ul>
            <li>1- فراهوش رو به دوستات معرفی کن و کد دعوت براشون بفرست</li>
            <li>2- تکالیفت رو به موقع انجام بده</li>
            <li>3- از ابزارک‌ها استفاده کن</li>
            <li>4- از ابزارک‌ها استفاده کن</li>
            <li>5- از ابزارک‌ها استفاده کن</li>
            <li>6- از ابزارک‌ها استفاده کن</li>
          </ul>
        </Typography>
      </div>
    </Stack>
  );
}
