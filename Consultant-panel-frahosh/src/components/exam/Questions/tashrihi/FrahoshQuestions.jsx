import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Question1 from "./Question1";
import { useContext } from "react";
import { examContext } from "../../../../context/examContext"

const FrahoshQuestions = () => {
  const {pattern} = useContext(examContext)

  const list = [
    {
      text: "سوال 1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      level : 1,
      selected : true,
      answer: ""
    },
    {
        text: "سوال 1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        level : 2,
        selected : false,
        answer: ""
      },
      {
        text: "سوال 1-لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        level : 3,
        selected : true,
        answer: ""
      },
  ];
  return (
    <Box mt={1}>
      <Grid container spacing={2} p={{ xs: 1, md: 2 }}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          textAlign="left"
          display="flex"
          alignItems="center"
        >
          <Typography>انتخاب سوال به صورت:</Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="خودکار"
              />
              <FormControlLabel value="male" control={<Radio />} label="دستی" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {
          pattern.type ==1 && <Grid item xs={12} md={6} lg={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="هر سوال محدودیت زمانی دارد"
            />
          </FormGroup>
        </Grid>
        }
        <Grid item xs={12} md={6} lg={5} display="flex" alignItems="center">
          <Typography noWrap width={200}>
            درجه سختی سوالات
          </Typography>
          <select className="input-style">
            <option>سخت</option>
            <option>سخت</option>
            <option>سخت</option>
          </select>
        </Grid>
      </Grid>
      <Box mt={3} display="flex" justifyContent="space-between" p={{ xs: 1, md: 2 }}>
        <Typography fontWeight={700}>لیست سوالات</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={1}
        p={2}
        sx={{ backgroundColor: "#095385", color: "#fff" }}
      >
        <Typography>تعداد سوالات انتخاب شده : 5</Typography>
        <Typography>جمع بارم : 6</Typography>
      </Box>
      <Box>
      {
        list.map((i,index)=>(
            <Box py={0} key={index}>
            <Question1 item={i} index={index} />
            <Divider/>
            </Box>
        ))
      }
      </Box>
    </Box>
  );
};

export default FrahoshQuestions;
