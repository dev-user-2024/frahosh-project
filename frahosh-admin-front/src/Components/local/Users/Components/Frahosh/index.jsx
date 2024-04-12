import { FormControl, Grid, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Button from '../../../../general/Button'
import * as Styled from '../../styled'
import Select from '../../../../general/Forms/Select'
import Input from '../../../../general/Forms/Input'
import { FormProvider, useForm } from 'react-hook-form'

const Frahosh = () => {
    const methods = useForm()

    return (
        <div>
            <Grid container>
                <Styled.UserOptions item>
                    <FormProvider {...methods}>
                        <form action="">
                            <Button>+کاربر جدید</Button>
                            <FormControl >
                                <span>مرتب سازی بر اساس </span>
                                <Select id="my-select" defaultValue="option1" name='status1'>
                                    <MenuItem value="option1">حروف الفبا</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <Input placeholder="جست و جوی کاربر..." name='status2' />
                            </FormControl>
                            <Button>خروجی اکسل</Button>
                        </form>
                    </FormProvider>
                </Styled.UserOptions>

                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" >کد کاربر</TableCell>
                                <TableCell align="right">نام کاربر</TableCell>
                                <TableCell align="right">تاریخ فعالسازی</TableCell>
                                <TableCell align="right">وضعیت فعالیت</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "15%" }}>6011</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "30%" }}>محمد علیزاده</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "40%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "10%" }}>فعال</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "15%" }}>6011</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "30%" }}>محمد علیزاده</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "40%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "10%" }}>فعال</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" sx={{ border: 'none', width: "15%" }}>6011</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "30%" }}>محمد علیزاده</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "40%" }}>1402/02/01</TableCell>
                                <TableCell align="right" sx={{ border: 'none', width: "10%" }}>فعال</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>
            {/* <Pagination dir='ltr' count={3} variant="outlined" shape="rounded" /> */}
        </div >
    )
}

export default Frahosh