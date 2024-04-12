import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import upload from "../../assests/image/Upload.svg";

export default function NewTicket() {
  return (
    <Box px={3}>
      <Formik
        initialValues={{ aryy: [{ qus: "", ans: "" }] }}
        validationSchema={""}
        onSubmit={(values, { resetForm }) => {}}
        enableReinitialize={true}
      >
        {({ values, isSubmitting, errors, setFieldValue, touched }) => (
          <Form>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              mt={3}
              pr={2}
            >
              <Grid item xs={12} md={6} lg={5}>
                <Box mb={3}>
                  <Typography textAlign="left" sx={{ color: "text.secondary" }}>
                    عنوان تیکت
                  </Typography>
                  <Field
                    className="input-style"
                    name="1"
                    placeholder="موضوع تیکت رو بنویس"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div className="text-danger">{msg}</div>}
                  />
                </Box>
                <Box mb={3}>
                  <Typography textAlign="left" sx={{ color: "text.secondary" }}>
                    درس
                  </Typography>
                  <Field as="select" className="input-style" name="1">
                    <option>ریاضی</option>
                    <option>ریاضی</option>
                    <option>ریاضی</option>
                  </Field>
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div className="text-danger">{msg}</div>}
                  />
                </Box>
                <Box mb={3}>
                  <Typography textAlign="left" sx={{ color: "text.secondary" }}>
                    الویت
                  </Typography>
                  <Field as="select" className="input-style" name="1">
                    <option>بالا</option>
                    <option>متوسط</option>
                    <option>کم</option>
                  </Field>
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div className="text-danger">{msg}</div>}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={5}
                display="flex"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Typography textAlign="left" sx={{ color: "text.secondary" }}>
                    متن پیام
                  </Typography>
                  <Box>
                    <Field
                      as="textarea"
                      className="input-style"
                      name="1"
                      style={{
                        height: "160px",
                        resize: "none",
                        padding: "10px",
                      }}
                    />
                  </Box>
                  <ErrorMessage
                    name="name"
                    render={(msg) => <div className="text-danger">{msg}</div>}
                  />
                </Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography color='text.secondary'>فایل‌های مرتبط</Typography>
                  <Button
                    sx={{
                      height: "48px",
                      background: "#1D9BF0",
                      borderRadius: "10px",
                      color: "#fff",
                      width: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        background: "#1D9BF0",
                      },
                    }}
                    component="label"
                    variant="outlined"
                  >
                    <img alt="" src={upload} />
                    <input type="file" hidden />
                    بارگذاری فایل
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mt={5}
              mb={3}
            >
              <Button variant="contained" sx={{ width: "300px" }}>
                ارسال تیکت
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
