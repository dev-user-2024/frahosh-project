import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ArrowBack, FileUploadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { serverApi , token } from "../../confing/confing";
import axios from "axios";
import { useEffect , useState } from "react";
const MyHandout = () => {
    const [list  , setList] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}handout`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box
        mt={2}
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <label htmlFor="upload_file">
          <input type="file" id="upload_file" style={{ display: "none" }} />
          <span
            style={{
              padding: "8px 20px 8px 20px",
              backgroundColor: "#1D9BF0",
              color: "#fff",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FileUploadOutlined />
            بارگذاری جزوه یا فیلم
          </span>
        </label>
      </Box>
      <Grid container spacing={3} mt={3} sx={{ color: "text.primary" }}>
        <Grid item xs={12} md={4}>
        <Box display='flex' alignItems='center'>
        <Typography sx={{width:"120px"}}>انتخاب درس</Typography>
        <select className="input-style">
        <option>ریاضی</option>
        <option>علوم</option>
        </select>
        </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box display='flex' alignItems='center'>
        <Typography sx={{width:"120px"}}>انتخاب جلسه</Typography>
        <select className="input-style">
        <option>اول</option>
        <option>دوم</option>
        </select>
        </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box display='flex' alignItems='center'>
        <Typography sx={{width:"160px"}}>انتخاب نوع جزوه</Typography>
        <select className="input-style">
        <option>همه</option>
        <option>صوتی</option>
        </select>
        </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: 'text.secondary'
              }}
            >
              <Typography>22 مرداد 1402</Typography>
              <Typography>ریاضی</Typography>
              <Link to="1">
                <Typography
                  display="flex"
                  alignItems="center"
                >
                  <ArrowBack />
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
          <Box
            display="flex"
            p={2}
            justifyContent="space-between"
            sx={{
              backgroundColor: 'background.paper',
              boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
              color: 'text.secondary'
            }}
          >
            <Typography>22 مرداد 1402</Typography>
            <Typography>ریاضی</Typography>
            <Link to="1">
              <Typography
                display="flex"
                alignItems="center"
              >
                <ArrowBack />
              </Typography>
            </Link>
          </Box>
        </Grid>
        </Grid>
    </div>
  );
};

export default MyHandout;
