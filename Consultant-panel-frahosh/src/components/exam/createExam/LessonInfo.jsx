import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useTheme } from "@mui/material";
import { Add, PlusOneRounded } from "@mui/icons-material";
const LessonInfo = ({ type, setPattern, setStep }) => {
  const theme = useTheme();

  return (
    <Box p={{ xs: 1, md: 2 }}>
      <Formik
        initialValues={{
          arry: [
            {
              title: "",
              season: "",
              part: "",
            },
          ],
        }}
        validationSchema={""}
        onSubmit={(values, { resetForm }) => {
          setStep(3);
        }}
        enableReinitialize={true}
      >
        {({ values, isSubmitting, errors, setFieldValue, touched }) => (
          <Form>
            <Box>
              <FieldArray name="arry">
                {({ insert, remove, push }) => (
                  <div>
                    {values.arry.length > 0 &&
                      values.arry.map((p, index) => (
                        <Grid container spacing={2} width="100%" key={index} mb={2}>
                          <Grid item xs={6} md={6} lg={4}>
                            <Typography
                              textAlign="left"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#fff"
                                    : "000",
                              }}
                            >
                              درس
                            </Typography>
                            <Field
                              as="select"
                              className="input-style"
                              name="grade"
                            >
                              <option></option>
                              <option>ریاضی</option>
                              <option>علوم</option>
                              <option>زبان</option>
                            </Field>
                            <ErrorMessage
                              name={`arry.${index}.title`}
                              render={(msg) => (
                                <div className="text-danger">{msg}</div>
                              )}
                            />
                          </Grid>
                          <Grid item xs={6} md={6} lg={4}>
                            <Typography
                              textAlign="left"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#fff"
                                    : "000",
                              }}
                            >
                              فصل
                            </Typography>
                            <Field
                              as="select"
                              className="input-style"
                              name={`arry.${index}.season`}
                            >
                              <option></option>
                              <option>اول</option>
                              <option>دوم</option>
                              <option>سوم</option>
                            </Field>
                            <ErrorMessage
                              name="name"
                              render={(msg) => (
                                <div className="text-danger">{msg}</div>
                              )}
                            />
                          </Grid>
                          <Grid item xs={6} md={6} lg={4}>
                            <Typography
                              textAlign="left"
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#fff"
                                    : "000",
                              }}
                            >
                              بخش
                            </Typography>
                            <Field
                              as="select"
                              className="input-style"
                              name={`arry.${index}.part`}
                            >
                              <option></option>
                              <option value={1}>اتحاد</option>
                              <option value={2}>مشتق</option>
                              <option value={3}>هندسه</option>
                            </Field>
                            <ErrorMessage
                              name="name"
                              render={(msg) => (
                                <div className="text-danger">{msg}</div>
                              )}
                            />
                          </Grid>
                        </Grid>
                      ))}
                      <Box
                      width="100%"
                      display="flex"
                      justifyContent="left"
                      mb={3}
                      mt={2}
                    >
                    <Button
                    type="button"
                    variant="contained"
                    sx={{ width: "200px", ml: 2 }}
                    onClick={() =>
                        push({
                            title: "",
                            season: "",
                            part: "",
                        })
                      }
                  >
                    اضافه کردن
                    <Add/>
                  </Button>
                    </Box>
                  </div>
                )}
              </FieldArray>
            </Box>
            <Box width="100%"></Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mt="200px"
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
  );
};

export default LessonInfo;
