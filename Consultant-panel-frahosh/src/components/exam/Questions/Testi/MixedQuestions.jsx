import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import camera from "../../../../assests/image/icon/camera.png";
import video from "../../../../assests/image/icon/video-play.png";
import FormAddQus from "./FormAddQus";
import FrahoshQuestions from "./FrahoshQuestions";
import { useState } from "react";
import { useContext } from "react";
import { examContext } from "../../../../context/examContext";
const MixedQuestions = () => {
  const [typeQus, setTypeQus] = useState("teacher");
  const [open, setOpen] = React.useState(false);
  const {pattern} = useContext(examContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {typeQus === "teacher" ? (
        <Box>
          <Grid container spacing={2} p={{ xs: 1, md: 2 }}>
            <Grid item xs={12} md={6} lg={3}>
              <Button variant="contained" onClick={handleClickOpen}>
                اضافه کردن سوال جدید
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    سوال جدید را خودتان طرح می کنید یا از بانک سوال فراهوش اضافه
                    می کنید؟
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{justifyContent:"center"}}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setTypeQus("teacher");
                      handleClose()
                    }}
                  >
                    سوال خودم
                  </Button>
                  <Button variant="outlined"  onClick={() => {
                    setTypeQus("frahosg");
                    handleClose()
                  }}>
                    سوالات فراهوش
                  </Button>
                </DialogActions>
              </Dialog>
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
            <Grid item xs={12} md={6} lg={3}>
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
                  اضافه کردن عکس به آزمون
                </span>
              </label>
              <input type="file" id="upload_file" style={{ display: "none" }} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
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
                  اضافه کردن ویدیو به آزمون
                </span>
              </label>
              <input type="file" id="upload_file" style={{ display: "none" }} />
            </Grid>
          </Grid>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            p={{ xs: 1, md: 2 }}
          >
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
          <Box mt={5} px={2}>
            <FormAddQus />
          </Box>
        </Box>
      ) : (
        <Box>
          <FrahoshQuestions />
          <Box mb={2} mt={3} display="flex" justifyContent="center">
            <Button
              onClick={() => {
                setTypeQus("teacher");
              }}
              variant="contained"
            >
              ذخیره و بازگشت به سوالات معلم
            </Button>
            <Button
              onClick={() => {
                setTypeQus("teacher");
              }}
              variant="outlined"
              sx={{ ml: 2 }}
            >
              انصراف
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default MixedQuestions;
