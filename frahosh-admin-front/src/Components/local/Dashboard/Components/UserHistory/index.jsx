import { Box, Grid } from '@mui/material'
import * as Styled from './styled'
import LeftArrow from '../../../../../assets/icons/left-arrow-dashboard.svg'

const UserHistory = () => {
    return (
        <Styled.HistoryCard container spacing={3}>
            <Grid item sm={12} md={6}>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.902 7.99951C41.366 7.99951 44.998 11.5955 44.998 16.0135L45 21.2015C45 21.5975 44.842 21.9815 44.56 22.2615C44.28 22.5435 43.898 22.7015 43.5 22.7015C41.926 22.7015 40.646 23.9575 40.646 25.5015C40.646 27.0455 41.926 28.3015 43.5 28.3015C44.328 28.3015 45 28.9735 45 29.8015V34.9855C45 39.4035 41.368 42.9995 36.904 42.9995H10.096C5.632 42.9995 2 39.4035 2 34.9855V29.8015C2 28.9735 2.672 28.3015 3.5 28.3015C5.074 28.3015 6.354 27.0455 6.354 25.5015C6.354 24.0015 5.126 22.8695 3.5 22.8695C3.102 22.8695 2.72 22.7115 2.44 22.4295C2.158 22.1495 2 21.7655 2 21.3695L2.002 16.0135C2.002 11.5955 5.634 7.99951 10.098 7.99951H36.902ZM36.902 10.9995H28.698L28.6992 14.8419C28.6992 15.6699 28.0272 16.3419 27.1992 16.3419C26.3712 16.3419 25.6992 15.6699 25.6992 14.8419L25.698 10.9995H10.098C7.288 10.9995 5.002 13.2495 5.002 16.0135L5 20.0495C7.534 20.6715 9.354 22.8435 9.354 25.5015C9.354 28.1855 7.502 30.4495 5 31.1075V34.9855C5 37.7495 7.286 39.9995 10.096 39.9995H25.698L25.6992 37.0225C25.6992 36.1925 26.3712 35.5225 27.1992 35.5225C28.0272 35.5225 28.6992 36.1925 28.6992 37.0225L28.698 39.9995H36.904C39.714 39.9995 42 37.7495 42 34.9855V31.1075C39.498 30.4495 37.646 28.1855 37.646 25.5015C37.646 22.8155 39.496 20.5535 42 19.8955L41.998 16.0135C41.998 13.2495 39.712 10.9995 36.902 10.9995ZM27.1992 19.0085C28.0272 19.0085 28.6992 19.6805 28.6992 20.5085V30.1505C28.6992 30.9785 28.0272 31.6505 27.1992 31.6505C26.3712 31.6505 25.6992 30.9785 25.6992 30.1505V20.5085C25.6992 19.6805 26.3712 19.0085 27.1992 19.0085Z" fill="#095385" />
                        </svg>
                    </div>
                    <div>
                        <h4>تیکت های پاسخ داده نشده</h4>
                    </div>
                    <div>
                        <p>12</p>
                    </div>
                </div>
            </Grid>
            <Grid item sm={12} md={6}>
                <div>
                    <h4>تاریخچه عملکرد کاربران</h4>
                    <div>
                        <Grid container marginTop={1}>
                            <Grid container xs={12}>
                                <Grid item xs={2}>
                                    <Box>
                                        <p>تاریخ</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>کاربر</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>مدرسه</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>عملکرد کاربر</p>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={2}>
                                    <Box>
                                        <p>امروز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>دانش آموز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>درخت دانش</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>ایجاد آزمون</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box>
                                        <img src={LeftArrow} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={2}>
                                    <Box>
                                        <p>امروز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>دانش آموز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>درخت دانش</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>ایجاد آزمون</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box>
                                        <img src={LeftArrow} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={2}>
                                    <Box>
                                        <p>امروز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>دانش آموز</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>درخت دانش</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>
                                        <p>ایجاد آزمون</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={1}>
                                    <Box>
                                        <img src={LeftArrow} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Styled.HistoryCard>
    )
}

export default UserHistory