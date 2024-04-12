import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import dashcoins from "../../assests/image/svg/dashcoins.svg";

export default function EarnedFaracoin(prop) {
  const { faracoinNumber } = prop;
  return (
    <Box
      className={styles.componentStyle}
      sx={{
        height: "224px",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 0,
        backgroundColor: "background.paper",
      }}
    >
      <img src={dashcoins} className={styles.coinsImg} />
      <Typography color="text.secondary" variant="h3">
        {faracoinNumber}
      </Typography>
      <Typography color="text.secondary">فراکوین به‌دست آوردی</Typography>
    </Box>
  );
}
