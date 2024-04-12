import React, { useState } from "react";
import ListenersIcon from "../../../assets/icons/listeners.png"
import "./listener-counter.styles.css"

const ListenerCounter = ({views}) => {


    const [listeners, setListeners] = useState(0),
        [isListening, setIsListening] = useState(false)

        const onPlayPauseButtonClick = () => {
            if (!isListening) {
                setIsListening(true);
                setListeners(listeners + 1);
            }
        }

        // const playPauseButton = document.getElementById("playPauseButton");

        // playPauseButton.add.className()
        
    return (

        <div className={`listen-button ${isListening ? "listened" : ""}`}>
            <img src={ListenersIcon} alt="" />

            <p>{views} نفر شنیده‌اند</p>
        </div>


    );
};

export default ListenerCounter;