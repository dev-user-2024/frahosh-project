import React from "react";
import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import img1 from "../../assests/image/grade-exampage.png";
import img2 from "../../assests/image/chat2-exampage.png";
import img3 from "../../assests/image/chart-exampage.png";
import { Link } from "react-router-dom";
const AzmoonList = () => {
  const theme = useTheme();
  return (
    <Box mt={6}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Link to="./id6">
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #F1A6A0 85%, #FFF2F1 100%)",
                display: "flex",
                height: "339px",
                px: 0,
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <img
                src={img1}
                alt=""
                style={{
                  paddingTop: '25px',
                }}
              />
              <Typography
                sx={{ color: theme.palette.mode === "dark" ? "#000" : "000" }}
                textAlign="center"
                fontWeight={600}
                fontSize="17px"
                mt={6}
              >
               برگه امتحان
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="./">
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #ACEBCE 85%, #E9FAF2 100%)",
                display: "flex",
                height: "339px",
                px: 0,
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <img
                src={img2}
                alt=""
                style={{
                  paddingTop: '25px',
                }}
              />
              <Typography
                sx={{ color: theme.palette.mode === "dark" ? "#000" : "000" }}
                textAlign="center"
                fontWeight={600}
                fontSize="17px"
                mt={6}
              >
                نمودار میانگین نمرات
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>          <Link to="./">
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #ADD3EC 85%, #EAF6FF 100%)",
                display: "flex",
                height: "339px",
                px: 0,
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <img
                src={img3}
                alt=""
                style={{
                  paddingTop: '25px',
                }}
              />
              <Typography
                sx={{ color: theme.palette.mode === "dark" ? "#000" : "000" }}
                textAlign="center"
                fontWeight={600}
                fontSize="17px"
                mt={6}
              >
               نمودار میانه نمرات
              </Typography>
            </Box>
          </Link>
          </Grid>
      </Grid>
    </Box>
  );
};

export default AzmoonList;
