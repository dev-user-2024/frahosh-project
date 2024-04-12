import { Container, Grid } from '@mui/material'
import React from 'react'
import ReportcardList from '../../../Components/testanalysis/ReportcardList'
import TestAnalysisBarChart from '../../../Components/testanalysis/TestAnalysisBarChart'
import TestAnalysisChart from '../../../Components/testanalysis/TestAnalysisChart'

export default function TestAnalysis() {
  return (
<Container >
    <Grid container mt={4}>
            <Grid container item  
            sx={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <Grid container item xs={12}  md={5.5} >
                    <TestAnalysisBarChart />
                </Grid>
                <Grid container item xs={12}  md={5.5} > 
                    <TestAnalysisChart />
                </Grid>
            </Grid>
            <Grid container item mt={8}>
                    <ReportcardList reportCard={"کارنامه مهر ماه سال تحصیلی 1402-1401"} />
            </Grid>
    </Grid>
</Container>
  )
}
