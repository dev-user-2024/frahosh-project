import React from "react";
import ZPattern from "../../../z-pattern/z-pattern.component";
import Button from "../../../buttons/button.component";
import { Stack, Typography } from "@mui/material";
import ArrowLeft from "../../../../assets/icons/arrow-left-white.png";
import styles from "./leftSide.style.module.css";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const LeftSide = ({ title, text, pic, link }) => {
  const theme = useTheme();

  return (
    <div className={styles.sec3_bg}>
      <div className={styles.sec3}>
        <ZPattern zPatternType={"zPatternRtl"}>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={3}
            justifyContent="space-around"
            alignItems="center"
            width={"100%"}
          >
            <div className="z-pattern-image">
              <img className={styles.pic} src={pic} alt="" />
            </div>
            <div className="z-pattern-text">
            <Typography
            variant="h4"
            mx={2}
            sx={{
              fontWeight: "600",
              fontFamily: "Rokh-Bold",
              color:theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
              direction: "rtl",
            }}
            className="z-pattern-text-title"
          >
            {title}
          </Typography>
              <Typography
                sx={{
                    fontWeight: "500",
                    fontFamily: "IRANSansX",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    direction: "rtl",
                    fontSize: "18px",
                    lineHeight: "50px",
                  }}
                  className="z-pattern-text-content"
              >
                {text}
              </Typography>
              <Stack direction={{ md: "row", xs: "column" }} alignItems="end">
                <Button>
                  ورود به سامانه
                  <img src={ArrowLeft} alt="" />
                </Button>
                <Link to={link}>
                <Button buttonType={"SmarteningBtn"}>اطلاعات بیشتر...</Button>
                </Link>
              </Stack>
            </div>
          </Stack>
        </ZPattern>
      </div>
    </div>
  );
};

export default LeftSide;
