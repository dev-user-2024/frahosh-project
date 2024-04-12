import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
const Question1 = ({ item, index }) => {
  const [showAnswer, setShowNswer] = useState(false);
  const IncreaseGrade = () => {
    const grade = document.getElementById(`grade${index}`);
    if (grade.value) {
      grade.value = parseInt(grade.value) + 1;
    } else {
      grade.value = 0;
    }
  };
  const DecreaseGrade = () => {
    const grade = document.getElementById(`grade${index}`);
    if (grade.value > 0) {
      grade.value = parseInt(grade.value) - 1;
    }
  };
  const IncreaseTime = () => {
    const grade = document.getElementById(`time${index}`);
    if (grade.value) {
      grade.value = parseInt(grade.value) + 1;
    } else {
      grade.value = 0;
    }
  };
  const DecreaseTime = () => {
    const grade = document.getElementById(`time${index}`);
    if (grade.value > 0) {
      grade.value = parseInt(grade.value) - 1;
    }
  };
  return (
    <Box
      py={2}
      sx={{
        borderLeft: item.selected ? "6px solid #11AA63 " : "6px solid #DDDDDD",
      }}
    >
      <Box
        px={1}
        display="flex"
        alignItems={{ md: "center" }}
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "row" }}
        textAlign="left"
      >
        <Typography>{item.text}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="پاسخ به این سوال اجباری است"
            />
          </FormGroup>
          {item.level === 1 ? (
            <Box
              sx={{
                backgroundColor: "rgba(17, 170, 99, 0.20)",
                color: "#007841",
              }}
              p={1}
            >
              آسان
            </Box>
          ) : item.level === 2 ? (
            <Box
              sx={{
                backgroundColor: "rgba(217, 147, 12, 0.20)",
                color: "#D9930C",
              }}
              p={1}
            >
              متوسط
            </Box>
          ) : item.level === 3 ? (
            <Box
              sx={{
                backgroundColor: "rgba(168, 12, 12, 0.20)",
                color: "#A80C0C",
              }}
              p={1}
            >
              سخت
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <Box mt={2} textAlign="left" px={1}>
        <Typography mb={2}>
          گزینه 1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است
        </Typography>
        <Typography mb={2}>
          گزینه 1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است
        </Typography>
        <Typography mb={2}>
          گزینه 1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است
        </Typography>
        <Typography mb={2}>
          گزینه 1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است
        </Typography>
      </Box>
      <Box px={1} display={showAnswer ? "flex" : "none"}>
        <Typography color="#11AA63">پاسخ صحیح : </Typography>
        <Typography>
          گزینه 3- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است
        </Typography>
      </Box>
      <Grid
        mt={2}
        px={1}
        container
        spacing={2}
        textAlign="left"
        alignItems="center"
      >
        <Grid item sm={3} md={6} lg={3}>
          <Button
            variant="contained"
            onClick={() => {
              setShowNswer(!showAnswer);
            }}
          >
            {
              showAnswer ? "مخفی کردن پاسخ" : "نمایش پاسخ"
            }
          </Button>
        </Grid>
        <Grid item sm={9} md={6} lg={3.5} display="flex" alignItems="center">
          <Typography mr={1} fontSize="smaller">
            بارم سوال
          </Typography>
          <Box display="flex">
            <Button
              variant="contained"
              sx={{
                mr: "-3px",
                minWidth: "30px",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              onClick={() => {
                IncreaseGrade();
              }}
            >
              +
            </Button>
            <input
              type="number"
              id={`grade${index}`}
              style={{
                width: "50px",
                border: "1px solid #095385",
                textAlign: "center",
              }}
            />
            <Button
              variant="contained"
              sx={{
                ml: "-3px",
                minWidth: "30px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
              onClick={() => {
                DecreaseGrade();
              }}
            >
              -
            </Button>
          </Box>
        </Grid>
        <Grid item sm={9} md={6} lg={3.5} display="flex" alignItems="center">
          <Typography fontSize="smaller" mr={1}>
            بازه زمانی پاسخ دهی
          </Typography>
          <Box display="flex">
            <Button
              variant="contained"
              sx={{
                mr: "-3px",
                minWidth: "30px",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              onClick={() => {
                IncreaseTime();
              }}
            >
              +
            </Button>
            <input
              type="number"
              id={`time${index}`}
              style={{
                width: "50px",
                border: "1px solid #095385",
                textAlign: "center",
              }}
            />
            <Button
              variant="contained"
              sx={{
                ml: "-3px",
                minWidth: "30px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
              onClick={() => {
                DecreaseTime();
              }}
            >
              -
            </Button>
            <Typography fontSize="smaller" ml={1}>
              دقیقه
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={3} md={3} lg={2}>
          {item.selected ? (
            <Button fullWidth variant="outlined">
              حذف
            </Button>
          ) : (
            <Button fullWidth variant="contained">
              اضافه کردن
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Question1;
