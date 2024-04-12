import React, { useState, useRef } from "react";
import { ReactComponent as BackWard5Seconds } from "../../../assests/icons/backward-5-seconds.svg";
import { ReactComponent as Forward15Seconds } from "../../../assests/icons/forward-15-seconds.svg";
import { ReactComponent as PlayButtonResponsive } from "../../../assests/icons/play-button-responsive-svg.svg";
import styles from "./PlayerPodcast.styles.module.css";
import {
  LibraryMusicOutlined,
  Forward30Outlined,
  Replay10Outlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const PlayerPodcast = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const forwardFifteen = () => {
    progressBar.current.value = Number(
      parseInt(progressBar.current.value) + 30
    );
    changeRange();
  };

  const backFive = () => {
    progressBar.current.value = Number(parseInt(progressBar.current.value) - 10);
    changeRange();
  };

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.audioPlayerInfo}>
        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
        <div className={styles.audioPlayerInfoTime}>
          <div className={styles.duration}>
            {!isNaN(duration) && calculateTime(duration)}
          </div>
          <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
        </div>
      </div>

      <div className={styles.audioPlayerButtons}>
        <audio
          ref={audioPlayer}
          src="https://downloadmusic.gratomic.ir/music/dl/archive/2017/12/12/Mohsen_Yeganeh__-Behet_Ghol_Midam_Gratomic.com_1.mp3"
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        ></audio>
        <div className={`${styles.forwardBackward} ${styles.forward}`}>
          <LibraryMusicOutlined />
        </div>

        <div
          className={`${styles.forwardBackward} ${styles.forward}`}
          onClick={forwardFifteen}
        >
          <Forward30Outlined />
        </div>

        <div
          onClick={() => {
            togglePlayPause();
          }}
          className={styles.playPause}
          id="playPauseButton"
        >
          <PlayButtonResponsive />
        </div>

        <div
          className={`${styles.backward} ${styles.forwardBackward}`}
          onClick={backFive}
        >
          <Replay10Outlined />
        </div>
        <div
        className={`${styles.forwardBackward} ${styles.forward}`}
      >
        < FavoriteBorderOutlined />
      </div>
      </div>
    </div>
  );
};

export default PlayerPodcast;
