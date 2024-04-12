import React from "react";
import { Box, Grid, Button, Typography, Divider } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTheme } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
const ExamConditions = ({ setStep }) => {
  const theme = useTheme();
  return (
    <div>
      <Box p={{ xs: 1, md: 2 }}>
        <Formik
          initialValues={{
            type: "",
            title: "",
            section: "",
            grade: "",
            corrector: "",
            source: "",
          }}
          validationSchema={""}
          onSubmit={(values, { resetForm }) => {
            setStep(5);
          }}
          enableReinitialize={true}
        >
          {({ values, isSubmitting, errors, setFieldValue, touched }) => (
            <Form>
              <Grid container spacing={2} textAlign="left" width="100%" mb={2}>
                <Grid item xs={12}>
                  <Typography fontWeight={700}>مشخصات آزمون</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  >
                    نوع آزمون
                  </Typography>
                  <Field
                    as="select"
                    className="input-style"
                    name="type"
                    disabled
                  >
                    <option>آنلاین-تستی</option>
                  </Field>
                </Grid>
                <Grid item xs={6} md={6} lg={8}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  >
                    عنوان آزمون
                  </Typography>
                  <Field
                    value="ازمون 1"
                    className="input-style"
                    name="type"
                    disabled
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  >
                    مقطع
                  </Typography>
                  <Field
                    as="select"
                    className="input-style"
                    name="type"
                    disabled
                  >
                    <option>آنلاین-تستی</option>
                  </Field>
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  >
                    پایه
                  </Typography>
                  <Field
                    as="select"
                    className="input-style"
                    name="type"
                    disabled
                  >
                    <option>آنلاین-تستی</option>
                  </Field>
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                  >
                    منبع سوالات
                  </Typography>
                  <Field
                    as="select"
                    className="input-style"
                    name="type"
                    disabled
                  >
                    <option>آنلاین-تستی</option>
                  </Field>
                </Grid>
              </Grid>
              <Divider />
              <Grid my={2} container spacing={2} textAlign="left" width="100%">
                <Grid item xs={12}>
                  <Typography fontWeight={700}>شرایط آزمون</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    آزمون نمره منفی دارد
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    نمایش رتبه در کارنامه
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    سوالات به صورت تصادفی جابجا شوند{" "}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    نمایش تعداد شرکت کنددگان در آزمون{" "}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    گزینه ها جا به جا شوند{" "}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    تقلب یاب فعال شود
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    امکان آزمون مجدد(بازگشت به ابتدای آزمون){" "}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    امکان بازگشت به سوال قبل{" "}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>
                    <Field type="checkbox" name="checked" value="One" />
                    نمایش نمره آزمون{" "}
                  </label>
                </Grid>
              </Grid>
              <Divider />
              <Grid my={2} container spacing={2} textAlign="left" width="100%">
                <Grid item xs={12}>
                  <Typography fontWeight={700}>زمان آزمون</Typography>
                </Grid>
                <Grid item xs={12} md={5} textAlign="left">
                  <Box display="flex" alignItems="center">
                    <Typography
                      textAlign="left"
                      sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "000",
                      }}
                      mr={1}
                    >
                      تاریخ آزمون :
                    </Typography>
                    <DatePicker
                      render={<InputIcon className="input-style" />}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} textAlign="left">
                  <Box display="flex" alignItems="center">
                    <Typography
                      textAlign="left"
                      sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "000",
                      }}
                      mr={1}
                    >
                      ساعت آزمون :
                    </Typography>
                    <input style={{ width: "30px" }} className="input-style" />
                    <span> : </span>
                    <input style={{ width: "30px" }} className="input-style" />
                  </Box>
                </Grid>
                <Grid mt={2} item xs={12} md={5} textAlign="left">
                  <div role="group" aria-labelledby="my-radio-group">
                    <label>
                      <Field type="radio" name="picked" value="One" />
                      ساعت مقرر
                    </label>
                    <label>
                      <Field type="radio" name="picked" value="Two" />
                      شناور
                    </label>
                  </div>
                </Grid>
                <Grid mt={2} item xs={12} md={5} textAlign="left">
                <Box display="flex" alignItems="center">
                  <Typography
                    textAlign="left"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "000",
                    }}
                    mr={1}
                  >
                    مدت زمان آزمون: 
                  </Typography>
                  <input style={{ width: "30px" }} className="input-style" />
                  دقیقه
                </Box>
              </Grid>
              </Grid>
              <Box width="100%"></Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                mt="50px"
                mb={3}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "200px", ml: 2 }}
                >
                  مرحله بعد
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default ExamConditions;
