import { Box, Grid, Button, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
const ExamInfo = ({ type,setPattern ,setStep }) => {
  const theme = useTheme();
  const [examType, setExamType] = useState("");

  useEffect(() => {
    if (type === 'test') {
      setExamType("تستی");
    } else if (type === 'descriptive') {
      setExamType("تشریحی");
    } else if (type === 'combinatorial') {
      setExamType("ترکیبی");
    }
  },[]);
  return (
    <Box p={{ xs: 1, md: 2 }}>
      <Formik
        initialValues={{
            type:"",
            title:"",
            section:"",
            grade:"",
            corrector:"",
            source : ""
        }}
        validationSchema={""}
        onSubmit={(values, { resetForm }) => {
            setPattern({
                type:values.type,
                examtType: type,
                source:values.source
            })
            setStep(2)
        }}
        enableReinitialize={true}
      >
        {({ values, isSubmitting, errors, setFieldValue, touched }) => (
          <Form>
            <Grid container spacing={2} width="100%">
              <Grid item xs={6} md={6} lg={4}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  نوع آزمون
                </Typography>
                <Field as="select" className="input-style" name="type">
                  <option></option>
                  <option value={1}>{`آنلاین - ${examType}`}</option>
                  <option value={2}>{`حضوری- ${examType}`}</option>
                </Field>
                <ErrorMessage
                name="name"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />
              </Grid>
              <Grid item xs={6} md={6} lg={8}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  عنوان آزمون
                </Typography>
                <Field type="text" className="input-style" name="title" />
                <ErrorMessage
                  name="name"
                  render={(msg) => <div className="text-danger">{msg}</div>}
                />
              </Grid>
              <Grid item xs={6} md={6} lg={3}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  مقطع
                </Typography>
                <Field as="select" className="input-style" name="section">
                  <option></option>
                  <option>اول</option>
                  <option>دوم</option>
                  <option>سوم</option>
                </Field>
                <ErrorMessage
                name="name"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />
              </Grid>
              <Grid item xs={6} md={6} lg={3}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  پایه
                </Typography>
                <Field as="select" className="input-style" name="grade">
                  <option></option>
                  <option>اول</option>
                  <option>دوم</option>
                  <option>سوم</option>
                </Field>
                <ErrorMessage
                name="name"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />
              </Grid>
              <Grid item xs={6} md={6} lg={3}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  تصحیح کننده
                </Typography>
                <Field as="select" className="input-style" name="corrector">
                  <option></option>
                  <option>معلم</option>
                  <option>مدیر</option>
                  <option></option>
                </Field>
                <ErrorMessage
                name="name"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />
              </Grid>
              <Grid item xs={6} md={6} lg={3}>
                <Typography
                  textAlign="left"
                  sx={{ color: theme.palette.mode === "dark" ? "#fff" : "000" }}
                >
                  منبع سوالات
                </Typography>
                <Field as="select" className="input-style" name="source">
                  <option></option>
                  <option value={1}>بانک سوال فراهوش</option>
                  <option value={2}>معلم</option>
                  <option value={3}>ترکیبی- معلم و بانک سوال فراهوش</option>
                </Field>
                <ErrorMessage
                name="name"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />
              </Grid>
            </Grid>
            <Box width="100%"></Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mt="200px"
              mb={3}
            >
              <Button type="submit" variant="contained" sx={{ width: "200px", ml: 2 }}>
                مرحله بعد
              </Button>
             
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ExamInfo;
