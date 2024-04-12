import React, { useState, useRef, useEffect } from 'react'
import { ReactComponent as BackWard10Seconds } from "../../../assests/icons/Rotate10Left.svg"
import { ReactComponent as Forward30Seconds } from "../../../assests/icons/Rotate30Right.svg"
import { ReactComponent as Heart } from "../../../assests/icons/Heart.svg"
import { ReactComponent as Playlist } from "../../../assests/icons/music-playlist.svg"
import { ReactComponent as PlayButtonResponsive } from "../../../assests/icons/Play.svg"
import { ReactComponent as Pause } from "../../../assests/icons/pause.svg"
import imgmusic from "../../../assests/image/voiceimage-min.png"
import styles from "../../../pages/Routes/Sounds/voices/player/player.module.css"
import {Grid} from '@mui/material'
import TitleTypography from '../title'
import Rating from '@mui/material/Rating'
import style from '../consultants.module.css'
import SendCommentAndRate from './SendCommentAndRate'


const VoiceConsultantation = (prop) => {


    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references 
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation




    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }




    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }



    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }


    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const forwardFifteen = () => {
        progressBar.current.value = Number(parseInt(progressBar.current.value) + 30);
        changeRange();
    }

    const backFive = () => {
        progressBar.current.value = Number(parseInt(progressBar.current.value) - 10);
        changeRange();
    }


    const clientWidth =document.body.clientWidth

    const {connectionType}=prop
    console.log(connectionType)
  
  
    const [value, setValue] = React.useState(0);
    const[start,setStart]=useState(false)
    const startHandler=()=>{
      setStart(true)
      console.log(start)
    }

    return (
        <>

        {start ? <> 
            <div className={styles.music} style={{margin:"3rem 0",width:"100%"}}>
                <div className={styles.audioPlayerInfo}>
                    <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                    <div className={styles.timeduration}>
                      <div className={styles.duration}>{!isNaN(duration) && calculateTime(duration)}</div>
                      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
                    </div>
                </div>
                <div className={styles.audioPlayer}>
                <div className={styles.audioPlayerButtons}>
                    <audio ref={audioPlayer} src="https://downloadmusic.gratomic.ir/music/dl/archive/2017/12/12/Mohsen_Yeganeh__-Behet_Ghol_Midam_Gratomic.com_1.mp3" preload="metadata" onLoadedMetadata={onLoadedMetadata}></audio>
                    <div className={`${styles.forwardBackward} ${styles.forward}`} onClick={forwardFifteen}>
                        <Playlist />
                    </div>
                    <div className={`${styles.forwardBackward} ${styles.forward}`} onClick={forwardFifteen}>
                        <Forward30Seconds />
                    </div>
                    <div onClick={() => { togglePlayPause(); }} className={styles.playPause} id="playPauseButton"  >
                        {isPlaying ? 
                           <div className={styles.pausebutton}> <Pause onClick={togglePlayPause} /> </div>
                            :<div className={styles.playbutton}> <PlayButtonResponsive onClick={togglePlayPause} /></div>
                        }
                    </div>
                    <div className={`${styles.backward} ${styles.forwardBackward}`} onClick={backFive}>
                        <BackWard10Seconds />
                    </div>
                    <div className={`${styles.backward} ${styles.forwardBackward}`} onClick={backFive}>
                        <Heart />
                    </div>
                </div>
             </div>
            </div>
            <SendCommentAndRate />


        </>
             :<button onClick={startHandler} className={style.buttonStyle}>شروع مشاوره <span>{connectionType}</span></button>}
</>
    )
}

export default VoiceConsultantation
