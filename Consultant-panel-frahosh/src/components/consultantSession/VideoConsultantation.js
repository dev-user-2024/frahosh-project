import React, { useState } from "react";
import {
Grid
} from "@mui/material";
import style from "./consultants.module.css";

export default function VideoConsultantation(prop) {
  const { connectionType } = prop;

  const [start, setStart] = useState(false);

  const startHandler = () => {
    setStart(true);
    console.log(start);
  };

  return (
    <>
      {start ? (
        <>
          <Grid>
            <video
              controls
              style={{ height: "580px", width: "100%", marginTop: "1rem" }}
            ></video>
          </Grid>
        </>
      ) : (
        <button onClick={startHandler} className={style.buttonStyle}>
          شروع مشاوره <span>{connectionType}</span>
        </button>
      )}
    </>
  );
}
