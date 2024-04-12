import React from "react";
import { Box, Typography, Grid, LinearProgress, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
const MeetingsHeld = () => {
  const [list, setList] = useState([]);
  const [login, setLogin] = useState(false);
  const [pageTotal, setPageTotl] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLogin(true);
        const { data } = await axios.get(`${serverApi}session?page=${pageNumber}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data.data);
        const page = Math.ceil(data.total / data.per_page);
        setPageTotl(page);
        setLogin(false);
      } catch (err) {
        setLogin(false);
        console.log(err);
      }
    };
    fetchData();
  }, [pageNumber]);
  return (
    <Box my={3}>
      <Typography variant="h6" fontWeight={700} color="text.primary">
        جلسات برگزار شده
      </Typography>
      <Box mt={3} sx={{ width: "100%" }}>
        {login && <LinearProgress />}
      </Box>

      <Grid container spacing={2} mt={3}>
        {list.map((i, index) => (
          <Grid item xs={12} key={index}>
            <Box
              display="flex"
              p={2}
              justifyContent="space-between"
              sx={{
                backgroundColor: "background.paper",
                boxShadow: "3px 3px 30px 0px rgba(0, 0, 0, 0.08)",
                color: "text.secondary",
              }}
            >
              <Typography>
                {i.start_date &&
                  new Intl.DateTimeFormat("fa-IR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(i.start_date))}
              </Typography>
              <Typography>{i.subject}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box mt={3} display='flex' justifyContent='center'>
      {pageTotal > 1 && (
        <Pagination
          count={pageTotal}
          onChange={(e, value) => {
            setPageNumber(value);
          }}
        />
      )}
    </Box>
    </Box>
  );
};

export default MeetingsHeld;
