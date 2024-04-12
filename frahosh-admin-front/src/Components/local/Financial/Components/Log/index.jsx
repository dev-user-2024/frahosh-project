import { FormControl, Grid, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import * as Styled from './styled'
import Button from '../../../../general/Button'
import Select from '../../../../general/Forms/Select'
import Input from '../../../../general/Forms/Input'

const Log = () => {
    return (
        <Grid container>
            <Styled.Options item>
                <FormControl >
                    <span>مرتب سازی بر اساس</span>
                    <Select id="my-select" defaultValue="option1">
                        <MenuItem value="option1">آدرس رویداد</MenuItem>
                        <MenuItem value="option2">گزینه ۲</MenuItem>
                        <MenuItem value="option3">گزینه ۳</MenuItem>
                    </Select>
                </FormControl>
                <FormControl >
                    <span>انتخاب نقش</span>
                    <Input placeholder="جست و جوی کاربر..."/>
                </FormControl>
                <Button>+اضافه کردن دسترسی جدید</Button>
            </Styled.Options>

            <Styled.TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" >ID</TableCell>
                            <TableCell align="right">تاریخ</TableCell>
                            <TableCell align="right">زمان</TableCell>
                            <TableCell align="right">جزئیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right" sx={{ border: 'none', width: "20%" }}>#2058</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "25%" }}>1402-02-01</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "30%" }}>10:25 ق.ظ</TableCell>
                            <TableCell align="right" sx={{ border: 'none', width: "35%" }}>بارگذاری تکالیف ریاضی</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Styled.TableContainer>
        </Grid>
    )
}

export default Log