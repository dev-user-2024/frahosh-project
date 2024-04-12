import React, { useState, useRef } from "react";
import { ReactComponent as BackWard5Seconds } from "../../../assets/icons/backward-5-seconds.svg";
import { ReactComponent as Forward15Seconds } from "../../../assets/icons/forward-15-seconds.svg";
import { ReactComponent as PlayButtonResponsive } from "../../../assets/icons/play-button-responsive-svg.svg";
import styles from "./best-books-section3-player.styles.module.css";

const BestBooksSection3 = ({data}) => {

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
      parseInt(progressBar.current.value) + 15
    );
    changeRange();
  };

  const backFive = () => {
    progressBar.current.value = Number(parseInt(progressBar.current.value) - 5);
    changeRange();
  };

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.audioPlayerInfo}>
        <div className={styles.duration}>
          {!isNaN(duration) && calculateTime(duration)}
        </div>

        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />

        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
      </div>

      <div className={styles.audioPlayerButtons}>
        <audio
          ref={audioPlayer}
          src={data.audio}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}
        ></audio>

        <div
          className={`${styles.forwardBackward} ${styles.forward}`}
          onClick={forwardFifteen}
        >
          <Forward15Seconds />
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
          <BackWard5Seconds />
        </div>
      </div>
    </div>
  );
};

export default BestBooksSection3;
