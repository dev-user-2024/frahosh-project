import React from "react";
import SearchConsultants from "../../Components/consultant/searchConsultants";
import { Box, LinearProgress, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ConsultantList from "../../Components/consultant/ConsultantList";
import ReservedConsultations from "../../Components/consultant/ReservedConsultations";
import ConsultationsDone from "../../Components/consultant/ConsultationsDone";
import axios from "axios";
import { serverApi, token } from "../../confing/confing";
import { useEffect, useState } from "react";
const Consultant = () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [consultant, setConsultant] = useState([]);
  const [consultantReseved, setConsultantReserved] = useState([]);
  const [consultantDone, setConsultantDone] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading1(true);
      try {
        const { data } = await axios.get(`${serverApi}consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setConsultant(data);
        setLoading1(false);
      } catch (err) {
        setLoading1(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading2(true);
      try {
        const { data } = await axios.get(`${serverApi}reserved/consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setConsultantReserved(data);
        setLoading2(false);
        console.log(data)
      } catch (err) {
        setLoading2(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading3(true);
      try {
        const { data } = await axios.get(`${serverApi}reserved/consultants`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log(data);
        setConsultantDone(data);
        setLoading3(false);
      } catch (err) {
        setLoading3(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <SearchConsultants />
      <Box mt={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography color="text.primary" variant="h6" fontWeight={700}>
            مشاوران
          </Typography>
          <Typography color="text.primary" display="flex" alignItems="center">
            مشاهده همه
            <ArrowBack />
          </Typography>
        </Box>
        <Box mb={3} sx={{ width: "100%" }}>
          {loading1 && <LinearProgress />}
        </Box>
        <ConsultantList list={consultant} />
      </Box>
      <Box mt={3}>
        <Typography color="text.primary" variant="h6" fontWeight={700}>
          مشاوره های رزرو شده
        </Typography>
        <Box mb={3} sx={{ width: "100%" }}>
          {loading2 && <LinearProgress />}
        </Box>
        <ReservedConsultations list={consultantReseved} />
      </Box>
      <Box mt={3}>
        <Typography color="text.primary" variant="h6" fontWeight={700}>
          مشاوره های انجام شده
        </Typography>
        <Box mb={3} sx={{ width: "100%" }}>
          {loading3 && <LinearProgress />}
        </Box>
        <ConsultationsDone list={consultantDone} />
      </Box>
    </div>
  );
};

export default Consultant;
