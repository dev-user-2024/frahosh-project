import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import Calendr from "../../components/caledar/Calenadr";
import { FileUploadOutlined } from "@mui/icons-material";
import img1 from "../../assests/image/avatar/DefualtProfile.png";
import Checkbox from "@mui/material/Checkbox";

export default function Myconsultant(props) {
  const { id } = props;
  const onDaysClickHandler = (event) => {
    console.log(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const desabledTime = [
    "2023/6/4",
    " 2023/6/1",
    "2023/6/3",
    "2023/6/18",
    "2023/6/15",
  ];

  const theme = useTheme();
  const breadcrumbs = [
    <Link underline="hover" key="1" href="./">
      <Typography
        sx={{
          color: theme.palette.mode === "dark" ? "#93ccc3" : "#828282",
          fontWeight: "500",
          fontSize: "14px",
        }}
        key="1"
      >
        مشاوره
      </Typography>
    </Link>,
    <Link underline="hover" key="2" href="/consultant/myconsultant">
      <Typography
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        صفحه مشاوره من
      </Typography>
    </Link>,
  ];

  return (
    <Box p={{ xs: 1, md: 2 }} mt={{ xs: 1, md: 1 }}  mb={5}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<ArrowBackIosIcon fontSize="tiny" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Grid container spacing={6} ml={0}>
          <Grid
            display="flex"
            alignItems="center"
            flexDirection="column"
            item
            md={6}
            sm={12}
            xs={12}
          >
            <Box
              width="100%"
              mt={5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src={img1}
                alt=""
                style={{
                  paddingTop: "25px",
                  position: "relative",
                  top: "-15px",
                }}
              />
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#040C1A",
                  fontSize: "15px",
                }}
                textAlign="center" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                تصویر خود را بارگذاری کنید
              </Typography>
              <Button
                sx={{
                  display: "flex",
                  width: "150px",
                  height: "42px",
                  gap: "5px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
                variant="contained"
              >
                <FileUploadOutlined />
                بارگذاری تصویر
              </Button>
            </Box>
            <Box width="100%" mt={3} display="flex" flexDirection="column">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                نام و نام خانوادگی
              </Typography>
              <input
                className="input-style"
                style={{
                  width: "auto",
                }}
              />
            </Box>
            <Box width="100%" mt={3} display="flex" flexDirection="column">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                درباره من
              </Typography>
              <textarea
                className="textarea"
                rows={15}
                placeholder="در این قسمت توضیحی درباره ی خودتان، تجربیات و سابقه ی کاریتان بدهید..."
              />
            </Box>
            <Box width="100%" mt={3} display="flex" flexDirection="column">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                مشخص کردن ساعت‌های مشاوره
              </Typography>
              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
              >
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                    mr: 1,
                  }}
                  textAlign="center"
                  fontWeight={600}
                  component="p"
                  flex="1" // Take remaining space
                >
                  صبح از ساعت
                </Typography>
                <select
                  style={{
                    width: "20%",
                  }}
                  className="input-style"
                >
                  <option>1</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                  }}
                  textAlign="center"
                  fontWeight={600}
                  component="p"
                  flex="1" // Take remaining space
                >
                  تا ساعت
                </Typography>
                <select
                  style={{
                    width: "20%",
                  }}
                  className="input-style"
                >
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </Box>
              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
              >
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                    mr: 1,
                  }}
                  textAlign="center"
                  fontWeight={600}
                  component="p"
                  flex="1" // Take remaining space
                >
                  عصر از ساعت
                </Typography>
                <select
                  style={{
                    width: "20%",
                  }}
                  className="input-style"
                >
                  <option>1</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                  }}
                  textAlign="center"
                  fontWeight={600}
                  component="p"
                  flex="1" // Take remaining space
                >
                  تا ساعت
                </Typography>
                <select
                  style={{
                    width: "20%",
                  }}
                  className="input-style"
                >
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </Box>
            </Box>
            <Box width="100%" mt={3} display="flex" flexDirection="column">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                نوع مشاوره مورد نظر
              </Typography>
              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  mr={2}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                  <Typography
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                      fontSize: "14px",
                      mr: 1,
                    }}
                    textAlign="center"
                    fontWeight={600}
                    component="p"
                    flex="1" // Take remaining space
                  >
                    تلفنی
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  mr={2}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                  <Typography
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                      fontSize: "14px",
                    }}
                    textAlign="center"
                    fontWeight={600}
                    component="p"
                    flex="1" // Take remaining space
                  >
                    حضوری
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  mr={2}
                >
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                  <Typography
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                      fontSize: "14px",
                    }}
                    textAlign="center"
                    fontWeight={600}
                    component="p"
                    flex="1" // Take remaining space
                  >
                    تصویری
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                mt: 6,
                mb: 3,
                display: "flex",
                height: "48px",
                gap: "10px",
                borderRadius: "10px",
                fontSize: "16px",
                width: {
                  xs: "100%",
                  md: "187px",
                },
              }}
              variant="contained"
            >
              ذخیره اطلاعات
            </Button>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            flexDirection="column"
            item
            md={6}
            sm={12}
            xs={12}
          >
            <Box
              width="100%"
              mt={3}
              display="flex"
              flexDirection="column"
            >
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                انتخاب روزهای قابل رزرو
              </Typography>
              <Box
                width="100%"
                mt={1}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Calendr
                  onDaysClick={onDaysClickHandler}
                  desabledTime={desabledTime}
                  id={id}
                />
              </Box>
            </Box>
            <Box width="100%" mt={3} display="flex" flexDirection="column">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#1D9BF0" : "#095385",
                  fontFamily: "Rokh-Bold",
                  fontSize: "18px",
                  mb: 1,
                }}
                textAlign="left" // Set text alignment to right
                fontWeight={600}
                variant="h5"
                component="p"
                flex="1" // Take remaining space
              >
                مشخص کردن هزینه مشاوره
              </Typography>
              <Box width="100%" mt={3} display="flex" alignItems="center">
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                  }}
                  textAlign="left" // Set text alignment to right
                  fontWeight={600}
                  variant="h5"
                  component="p"
                  flex="1" // Take remaining space
                >
                  به مدت
                </Typography>
                <select
                  style={{
                    width: "60%",
                  }}
                  className="input-style"
                >
                  <option>15 دقیقه</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </Box>
              <Box width="100%" mt={3}  display="flex" alignItems="center">
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "##040C1A",
                    fontSize: "14px",
                  }}
                  textAlign="left" // Set text alignment to right
                  fontWeight={600}
                  variant="h5"
                  component="p"
                  flex="1" // Take remaining space
                >
                  هزینه به ازای مدت
                </Typography>
                <select
                  style={{
                    width: "60%",
                  }}
                  className="input-style"
                >
                  <option>75 هزار تومان</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
