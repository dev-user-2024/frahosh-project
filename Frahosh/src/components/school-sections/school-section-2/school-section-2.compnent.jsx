import { Stack } from "@mui/system";
import pic1 from "../../../assets/image/Group 535.png";
import pic2 from "../../../assets/image/Group 537.png";

// import pic3 from '../../../assets/image/Group 538.png';
// import pic4 from '../../../assets/image/Group 539.png';
import pic5 from "../../../assets/image/Group 540.png";
import pic6 from "../../../assets/image/Group 540.png";
import styles from "./school-section-2.module.css";
import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";

const SchoolSection2 = () => {
  const theme = useTheme();

  return (
    <Box className={styles.section2}>
      <Box className={styles.section2_1}>
        <Typography
          variant="h4"
          mx={2}
          sx={{
            fontWeight: "600",
            fontFamily: "Rokh-Bold",
            color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
            direction: "rtl",
          }}
          className={styles.section2_title}
        >
          امکانات سامانه مدرسه
        </Typography>
        <Box className={styles.section2_desktop_cards}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={styles.card}>
              <Box className={styles.card_shadow_yellow}></Box>
              <Box className={styles.card_blue}>
                <Box className={styles.card_header}>
                  <img src={pic1} alt="" />
                  <h5 className={styles.card_title_yellow}>آزمون</h5>
                </Box>
                <Box>
                  <p className={styles.card_text_white}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className="card-white-shadow"></Box>
              <Box className={styles.card_white}>
                <Box className={styles.card_header}>
                  <img src={pic2} alt="" />
                  <h5 className={styles.card_title_blue}>جزوه</h5>
                </Box>
                <Box>
                  <p className={styles.card_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className="card-white-shadow"></Box>
              <Box className={styles.card_white}>
                <Box className={styles.card_header}>
                  <img src={pic2} alt="" />
                  <h5 className={styles.card_title_blue}>جزوه</h5>
                </Box>
                <Box>
                  <p className={styles.card_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box className={styles.card}>
              <Box className="card-white-shadow"></Box>
              <Box className={styles.card_white}>
                <Box className={styles.card_header}>
                  <img src={pic2} alt="" />
                  <h5 className={styles.card_title_blue}>جزوه</h5>
                </Box>
                <Box>
                  <p className={styles.card_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className="card-white-shadow"></Box>
              <Box className={styles.card_white}>
                <Box className={styles.card_header}>
                  <img src={pic2} alt="" />
                  <h5 className={styles.card_title_blue}>جزوه</h5>
                </Box>
                <Box>
                  <p className={styles.card_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className="card-white-shadow"></Box>
              <Box className={styles.card_white}>
                <Box className={styles.card_header}>
                  <img src={pic2} alt="" />
                  <h5 className={styles.card_title_blue}>جزوه</h5>
                </Box>
                <Box>
                  <p className={styles.card_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box className={styles.section2_phone_cards}>
          <Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-around"
                alignItems="center"
              >
                <Box className={styles.card}>
                  <Box className={styles.card_shadow_yellow}></Box>
                  <Box className={styles.card_blue}>
                    <Box className={styles.card_header}>
                      <img src={pic1} alt="" />
                      <h5 className={styles.card_title_yellow}>آزمون</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text_white}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.card}>
                  <Box className="card-white-shadow"></Box>
                  <Box className={styles.card_white}>
                    <Box className={styles.card_header}>
                      <img src={pic2} alt="" />
                      <h5 className={styles.card_title_blue}>جزوه</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-around"
                alignItems="center"
              >
                <Box className={styles.card}>
                  <Box className="card-white-shadow"></Box>
                  <Box className={styles.card_white}>
                    <Box className={styles.card_header}>
                      <img src={pic5} alt="" />
                      <h5 className={styles.card_title_blue}>جزوه</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.card}>
                  <Box className="card-white-shadow"></Box>
                  <Box className={styles.card_white}>
                    <Box className={styles.card_header}>
                      <img src={pic6} alt="" />
                      <h5 className={styles.card_title_blue}>جزوه</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-around"
                alignItems="center"
              >
                <Box className={styles.card}>
                  <Box className="card-white-shadow"></Box>
                  <Box className={styles.card_white}>
                    <Box className={styles.card_header}>
                      <img src={pic5} alt="" />
                      <h5 className={styles.card_title_blue}>جزوه</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.card}>
                  <Box className="card-white-shadow"></Box>
                  <Box className={styles.card_white}>
                    <Box className={styles.card_header}>
                      <img src={pic6} alt="" />
                      <h5 className={styles.card_title_blue}>جزوه</h5>
                    </Box>
                    <Box>
                      <p className={styles.card_text}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SchoolSection2;
