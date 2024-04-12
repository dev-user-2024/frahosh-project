import styles from "./Counseling-ai.module.css"
import Person1 from "../../../assets/image/ai1.png"
import Person2 from "../../../assets/image/ai2.png"
import Person3 from "../../../assets/image/ai3.png"
import Person4 from "../../../assets/image/ai4.png"
import Person5 from "../../../assets/image/ai5.png"
import Grid from '@mui/material/Grid';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Counselingai = () => {
    const theme = useTheme();

    return (
        <Box className={styles.box}>
        <Typography variant="h4"
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
          mx:2,
          mb:2,
          textAlign:"center"
        }}
      //   className="card-title"
        >
        پیشنهاد هوش مصنوعی فراهوش
        </Typography>
            <Grid container
                justifyContent="space-around"
              alignItems="center"
             rowSpacing={5} >
                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}> 
                    <Box className={styles.card}>
                        <img alt="" src={Person1} />
                        <Typography
                        sx={{
                          color: theme.palette.mode === "dark" ? "#fff" : "#000",
                        }}
                        // className="card-item-text"
                      >
                        نیما رضایی
                      </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
                    <Box className={styles.card}>
                        <img src={Person2} />
                        <p>محمد رضایی</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
                    <Box className={styles.card}>
                        <img src={Person3} />
                        <p>علی محمدی</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
                    <Box className={styles.card}>
                        <img src={Person4} />
                        <p>حمیدرضا حسین‌زاده</p>
                    </Box>
                </Grid>
                <Grid item md={2.4} sm={6}>
                    <Box className={`${styles.card} ${styles.lastch}`}>
                        <img src={Person5} />
                        <p>میترا حسنی</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Counselingai;
