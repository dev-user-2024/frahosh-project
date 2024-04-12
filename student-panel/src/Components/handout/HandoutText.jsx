import React from "react";
import { Box, Breadcrumbs, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";
const HandoutText = () => {
  const [indexShow, setIndexShow] = useState(0);
  const breadcrumbs = [
    <Typography key="1" color="inherit">
      جزوه
    </Typography>,
    <Typography key="2" color="inherit">
      جزوه های من
    </Typography>,
    <Typography key="3" color="inherit">
      جلسه سوم ریاضی
    </Typography>,
  ];
  const jozve = [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
  ];
  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Box mt={4} display="flex" justifyContent="space-between">
        <IconButton
          sx={{ backgroundColor: "text.primary", color: "#fff" }}
          onClick={() => {
            setIndexShow(indexShow - 1);
          }}
          disabled={indexShow === 0 ? true : false}
        >
          <ArrowForward />
        </IconButton>
        <Typography color='text.secondary'>صفحه {indexShow + 1}</Typography>
        <IconButton
          sx={{ backgroundColor: "text.primary", color: "#fff" }}
          onClick={() => {
            setIndexShow(indexShow + 1);
          }}
          disabled={indexShow === jozve.length-1 ? true : false}
        >
          <ArrowBack />
        </IconButton>
      </Box>
      <Box
        mt={2}
        p={{ xs: 2, md: 3 }}
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
          color: "text.secondary",
        }}
        minHeight={400}
      >
        <Typography>{jozve[indexShow].text}</Typography>
      </Box>
    </div>
  );
};

export default HandoutText;
