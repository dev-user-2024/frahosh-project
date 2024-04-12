import { Box, FormControl, Grid, MenuItem } from '@mui/material'
import * as Styled from './styled'
import Select from '../../../general/Forms/Select'
import { useState } from 'react'
import leftArror from '../../../../assets/icons/ticket-left-arrow.svg'
import { FormProvider, useForm } from 'react-hook-form'

const TicketsTable = () => {
    const methods = useForm()

    const [data] = useState([
        { id: "#125700", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: false },
        { id: "#125701", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: true },
        { id: "#125702", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: true },
        { id: "#125704", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: true },
        { id: "#125703", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: false },
        { id: "#125705", date: "1392/01/30", registered: "دانش‌آموز", title: "برای ثبت تسک روز به مشکل خورده ام و برای...", status: true },
    ])

    return (
        <Grid container>
            <Styled.TicketOption item>

                <FormProvider {...methods}>
                    <form action="" >
                        <FormControl >
                            <span>بازه زمانی</span>
                            <Select id="my-select" defaultValue="option1" name="status">
                                <MenuItem value="option1">ماه جاری</MenuItem>
                                <MenuItem value="option2">گزینه ۲</MenuItem>
                                <MenuItem value="option3">گزینه ۳</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl >
                            <span>مرتب سازی بر اساس </span>
                            <Select id="my-select" defaultValue="option1" name="status2">
                                <MenuItem value="option1">جدید ترین</MenuItem>
                                <MenuItem value="option2">گزینه ۲</MenuItem>
                                <MenuItem value="option3">گزینه ۳</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl >
                            <span>انتخاب وضعیت </span>
                            <Select id="my-select" defaultValue="option1" name="status3">
                                <MenuItem value="option1">همه وضعیت ها</MenuItem>
                                <MenuItem value="option2">گزینه ۲</MenuItem>
                                <MenuItem value="option3">گزینه ۳</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl >
                            <span>نوع کاربر </span>
                            <Select id="my-select" defaultValue="option1" name="status4">
                                <MenuItem value="option1">همه</MenuItem>
                                <MenuItem value="option2">گزینه ۲</MenuItem>
                                <MenuItem value="option3">گزینه ۳</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </FormProvider>
            </Styled.TicketOption>
            <Styled.TicketTableContainer container>
                <Grid container xs={12}>
                    <Grid item xs={2}>
                        <Box>
                            <p variant="p">ID</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p variant="p">تاریخ</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p variant="p">نقش ثبت شده</p>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <p variant="p">عنوان</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p variant="p">وضعیت</p>
                        </Box>
                    </Grid>
                </Grid>
                {
                    data.map(item => (
                        <Styled.TableContainer key={item.id} container xs={12}>
                            <Grid item xs={2}>
                                <Box>
                                    <p variant="p">{item.id}</p>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box>
                                    <p variant="p">{item.date}</p>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box>
                                    <p variant="p">{item.registered}</p>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <p variant="p">{item.title}</p>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box>
                                    <Styled.Text status={item.status}>{item.status ? "پاسخ داده شده" : "پاسخ داده نشده"}</Styled.Text>
                                    <img src={leftArror} alt="" />
                                </Box>
                            </Grid>
                        </Styled.TableContainer>
                    ))
                }
            </Styled.TicketTableContainer>
        </Grid>
    )
}

export default TicketsTable