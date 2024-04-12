import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Like0 } from "../../assests/icons/Like-0.svg";
import { ReactComponent as Like1 } from "../../assests/icons/Like-1.svg";
import styles from "./like.module.css";


function Like() {
  const [like, setlike] = useState(false);
  const likehandeler = () => {
    setlike(!like);

  };
  return (
    <>
    {like ? 
        <Like0 onClick={likehandeler} />
          : <Like1 onClick={likehandeler} />
    }
    </>
  );
}

export default Like;
