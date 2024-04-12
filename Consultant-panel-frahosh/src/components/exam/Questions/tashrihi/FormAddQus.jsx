import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Checkbox, FormControlLabel, FormGroup, useTheme } from "@mui/material";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import camera from "../../../../assests/image/icon/camera.png";
import video from "../../../../assests/image/icon/video-play.png";
import info from "../../../../assests/image/icon/info-circle.png";
import pen from "../../../../assests/image/icon/edit-2.png";
import trash from "../../../../assests/image/icon/trash.png";
const FormAddQus = () => {
  const theme = useTheme();

  const IncreaseGrade = (setFieldValue, index, values) => {
    const grade = values.arry[index].grade;
    if (grade === 0 || grade > 0) {
      setFieldValue(`arry.${index}.grade`, grade + 1);
    } else {
      setFieldValue(`arry.${index}.grade`, 0);
    }
  };
  const DecreaseGrade = (setFieldValue, index, values) => {
    const grade = values.arry[index].grade;
    if (grade > 0) {
      setFieldValue(`arry.${index}.grade`, grade - 1);
    }
  };
  const IncreaseTime = (setFieldValue, index, values) => {
    const time = values.arry[index].time;
    if (time === 0 || time > 0) {
      setFieldValue(`arry.${index}.time`, time + 1);
    } else {
      setFieldValue(`arry.${index}.time`, 0);
    }
  };
  const DecreaseTime = (setFieldValue, index, values) => {
    const time = values.arry[index].time;
    if (time > 0) {
      setFieldValue(`arry.${index}.time`, time - 1);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          arry: [
            {
              content: "",
              img: "",
              video: "",
              help: "",
              grade: "",
              time: "",
              require: "",
            },
          ],
        }}
        validationSchema={""}
        onSubmit={(values, { resetForm }) => {
          //   setStep(3);
          console.log(values);
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
                        <Box mb={2} key={index}>
                          <Grid
                            container
                            spacing={2}
                            key={index}
                            mb={2}
                            textAlign="left"
                          >
                            <Grid item xs={12}>
                              <Typography
                                textAlign="left"
                                sx={{
                                  color:
                                    theme.palette.mode === "dark"
                                      ? "#fff"
                                      : "000",
                                }}
                              >
                                {index + 1}-سوال را در کادر زیر بنویسید
                              </Typography>
                              <Box display="flex">
                                <Field
                                  className="input-style"
                                  name={`arry.${index}.content`}
                                  placeholder="متن سوال"
                                />
                                <IconButton>
                                  <img alt="" src={pen} />
                                </IconButton>
                                <IconButton onClick={() => remove(index)}>
                                  <img alt="" src={trash} />
                                </IconButton>
                              </Box>
                              <ErrorMessage
                                name="name"
                                render={(msg) => (
                                  <div className="text-danger">{msg}</div>
                                )}
                              />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                              <label htmlFor="upload_file">
                                <span
                                  style={{
                                    border: "1px solid #6c98b6",
                                    padding: "6px 8px",
                                    borderRadius: "5px",
                                    color: "#6c98b6",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "fit-content",
                                  }}
                                >
                                  <img width={20} alt="" src={camera} />
                                  اضافه کردن عکس به سوال {index + 1}
                                </span>
                              </label>
                              <input
                                type="file"
                                id="upload_file"
                                style={{ display: "none" }}
                              />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                              <label htmlFor="upload_file">
                                <span
                                  style={{
                                    border: "1px solid #6c98b6",
                                    padding: "6px 8px",
                                    borderRadius: "5px",
                                    color: "#6c98b6",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "fit-content",
                                  }}
                                >
                                  <img width={20} alt="" src={video} />
                                  اضافه کردن ویدیو به سوال {index + 1}
                                </span>
                              </label>
                              <input
                                type="file"
                                id="upload_file"
                                style={{ display: "none" }}
                              />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                              <label htmlFor="upload_file">
                                <span
                                  style={{
                                    border: "1px solid #6c98b6",
                                    padding: "6px 8px",
                                    borderRadius: "5px",
                                    color: "#6c98b6",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "fit-content",
                                  }}
                                >
                                  <img width={20} alt="" src={info} />
                                  اضافه کردن متن راهنما به سوال {index + 1}
                                </span>
                              </label>
                              <input
                                type="file"
                                id="upload_file"
                                style={{ display: "none" }}
                              />
                            </Grid>
                            <Grid
                              item
                              sm={6}
                              md={6}
                              lg={3.5}
                              display="flex"
                              alignItems="center"
                            >
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
                                    IncreaseGrade(setFieldValue, index, values);
                                  }}
                                >
                                  +
                                </Button>
                                <Field
                                  name={`arry.${index}.grade`}
                                  type="number"
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
                                    DecreaseGrade(setFieldValue, index, values);
                                  }}
                                >
                                  -
                                </Button>
                              </Box>
                            </Grid>
                            <Grid
                              item
                              sm={6}
                              md={6}
                              lg={3.5}
                              display="flex"
                              alignItems="center"
                            >
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
                                    IncreaseTime(setFieldValue, index, values);
                                  }}
                                >
                                  +
                                </Button>
                                <Field
                                  type="number"
                                  name={`arry.${index}.time`}
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
                                    DecreaseTime(setFieldValue, index, values);
                                  }}
                                >
                                  -
                                </Button>
                                <Typography fontSize="smaller" ml={1}>
                                  دقیقه
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                              <FormGroup>
                                <FormControlLabel
                                  control={<Checkbox />}
                                  label="پاسخ به این سوال اجباری است"
                                />
                              </FormGroup>
                            </Grid>
                          </Grid>
                          <Box display="flex" textAlign="left">
                            <Button
                              type="button"
                              fullWidth
                              variant={"contained"}
                              onClick={() =>
                                push({
                                  content: "",
                                  img: "",
                                  video: "",
                                  help: "",
                                  grade: "",
                                  time: "",
                                  require: "",
                                })
                              }
                            >
                              اضافه کردن سوال
                            </Button>
                          </Box>
                        </Box>
                      ))}
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="left"
                      mb={3}
                      mt={2}
                    ></Box>
                  </div>
                )}
              </FieldArray>
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mt={2}
              mb={3}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "200px", ml: 2 }}
              >
                ذخیره
              </Button>
              <Button
              type="submit"
              variant="outlined"
              sx={{ width: "200px", ml: 2 }}
            >
              انصراف
            </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAddQus;
