import { Container } from '@mui/material';
import React, { useState } from 'react';
import SurveyHeader from '../../../Components/surveyInfo/surveyHeader';
import SurveyCard from '../../../Components/surveyInfo/surveyCard';
import { useEffect } from "react";
import { serverApi , token } from '../../../confing/confing';
import axios from "axios";
import { element } from 'prop-types';

function SurveyInfo() {
  const [list , setList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(`${serverApi}pools`, { headers: { authorization: `Bearer ${token}` }});
            console.log(data)
            setList(data)
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    return (
        <Container
        sx={{
            paddingTop:"22px",
            display:"flex",
            flexDirection:"column",
            gap:"28px",
         }}>

            <SurveyHeader uncompletedNumber={7}/>
            {
              list.map(element => {
                return(
                  <SurveyCard id={element.id}   date={element.start_date} title={element.title} />
                )
              })
            }
        </Container>
    )
}

export default SurveyInfo
