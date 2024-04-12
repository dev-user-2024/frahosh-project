import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import * as Styled from './styled'

const MaturityTables = () => {
    return (
        <Styled.MaturityContainer container>
            <Grid item xs={12}>
                <TableContainer >
                    <Typography variant="h2" component="h2"> سر رسیدهای نزدیک</Typography>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" >نام مدرسه</TableCell>
                                <TableCell align="right">موعد پرداخت</TableCell>
                                <TableCell align="right">تعداد روزهای مانده</TableCell>
                                <TableCell align="right">مبلغ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" component="h2"> سر رسیدهای گذشته</Typography>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" >نام مدرسه</TableCell>
                                <TableCell align="right">موعد پرداخت</TableCell>
                                <TableCell align="right">تعداد روزهای مانده</TableCell>
                                <TableCell align="right">مبلغ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>مدرسه فروغ دانش</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "35%" }}>1روز</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "13%" }}>1200000 تومان</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Styled.MaturityContainer>
    )
}

export default MaturityTables