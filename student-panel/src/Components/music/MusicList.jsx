import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const MusicList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${serverApi}music`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setList(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Box mb={3} sx={{ width: "100%" }}>
        {loading && <LinearProgress />}
      </Box>
      {list.map((i, index) => (
        <Box key={index}>
          <Link to={`/music/${i.id}`}>
            <Box
              mt={2}
              px={2}
              py={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                color: "text.secondary",
              }}
            >
              <Box display="flex" alignItems="center">
                <Box
                  mr={2}
                  width={50}
                  height={50}
                  sx={{ backgroundColor: "#095385" }}
                ></Box>
                <Typography>{i.title}</Typography>
              </Box>
              <Typography>{i.album.name}</Typography>
              <Typography>بارگزاری توسط {i.uploaded_by.name}</Typography>
              <Typography>
                {i.created_at &&
                  new Intl.DateTimeFormat("fa-IR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(i.created_at))}
              </Typography>
            </Box>
          </Link>
          <hr />
        </Box>
      ))}
    </Box>
  );
};

export default MusicList;
