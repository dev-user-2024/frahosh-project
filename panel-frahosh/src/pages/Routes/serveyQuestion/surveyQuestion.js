import React, { useEffect, useState } from 'react'
import SurveyQuestionCard from '../../../Components/surveyQuestion/surveyQuestionCard'
import SurveyQuestionHeader from '../../../Components/surveyQuestion/surveyQuestionHeader'
import { Container, FormGroup} from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '../../../Components/buttons/button.component';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { serverApi , token } from "../../../confing/confing";
import { element } from 'prop-types'

function SurveyQuestion() {
    const {realid} = useParams();
    const [ info , setInfo] = useState({});
    const [questionList , setQuestionList] = useState([])
    const id = 1
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await axios.get(`${serverApi}pools/${id}`, {
              headers: { authorization: `Bearer ${token}` },
            });
            console.log(data["data"]);
            setInfo(data["data"]);
            setQuestionList(data["data"]["questions"])
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
        
         }}>
            <SurveyQuestionHeader 
            title={info["title"]}
            date={info["start_date"]}
            deadline={info["end_date"]}
            number={questionList.length} />
         <FormGroup>
         {
            questionList.map(element => {
                return(
                    <SurveyQuestionCard 
            question={element["question_text"]}
            questionanswer1={element["option_1"]}
            questionanswer2={element["option_2"]}
            questionanswer3={element["option_3"]}
            questionanswer4={element["option_4"]}
            />
                )
            })
         }
            <Grid container  mt={8} gap={8}>
                <Grid item xs={12}  sm={12} md={5} lg={5} xl={5}  
                sx={{display:"flex",
                 justifyContent:
                                {
                                 xl:"end",
                                 lg:"end",
                                 md:"end",
                                 sm:"center",
                                 xs:"center"}}}>
                   <Button buttonType="surveySubmit" type='submit'>
                    ذخیره
                   </Button>
                </Grid>
                <Grid item xs={12}  sm={12} md={5} lg={5} xl={5}   
                sx={{display:"flex",
                  justifyContent:
                                {md:"start",
                                 xs:"center"}}}>
                   <Button buttonType="surveyCancle">
                    لغو
                   </Button>
                </Grid>
            </Grid>
        </FormGroup>
        </Container>
        
    )
}

export default SurveyQuestion
