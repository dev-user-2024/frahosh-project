import { FormControl, Grid, MenuItem, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import Button from '../../../../general/Button'
import * as Styled from '../../styled'
import Select from '../../../../general/Forms/Select'
import Input from '../../../../general/Forms/Input'
import Avatar from '../../../../general/Avatar'
import { FormProvider, useForm } from 'react-hook-form'
import download from '../../../../../assets/icons/users-download.svg'
import edit from '../../../../../assets/icons/users-edit.svg'
import trash from '../../../../../assets/icons/users-trash.svg'

const Students = () => {
    const methods = useForm()

    return (
        <div>
            <Grid container>
                <Styled.UserOptions item>
                    <Styled.buttons>
                        <Button>
                            <span>+</span>
                            دانش آموز جدید
                        </Button>
                        <Button>
                            <img src={download} alt="download icon" />
                            ذخیره سند بعنوان...
                        </Button>
                    </Styled.buttons>
                    <h4>
                        فیلتر ها
                    </h4>
                    <FormProvider {...methods}>
                        <form action="">
                            <div>
                                <FormControl >
                                    <span>مرتب سازی بر اساس </span>
                                    <Select id="my-select" defaultValue="option1" name="status2">
                                        <MenuItem value="option1">حروف الفبا</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>مدرسه </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">فروغ دانش</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <Styled.SearchBox>
                                        <Input placeholder="جست و جوی دانش آموز..." name="status3" />
                                    </Styled.SearchBox>
                                </FormControl>
                            </div>
                        </form>
                    </FormProvider>
                </Styled.UserOptions>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <Styled.StyledTableCell>عکس پروفایل</Styled.StyledTableCell>
                                <Styled.StyledTableCell>ID</Styled.StyledTableCell>
                                <Styled.StyledTableCell>نام و نام خانوادگی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تاریخ عضویت</Styled.StyledTableCell>
                                <Styled.StyledTableCell>IP</Styled.StyledTableCell>
                                <Styled.StyledTableCell>وضعیت حساب کاربری</Styled.StyledTableCell>
                                <Styled.StyledTableCell>وضعیت حضور</Styled.StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell component="th" scope="row" >
                                    <Avatar size='smile' />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1001</Styled.StyledTableCell>
                                <Styled.StyledTableCell>محمد مهری</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1236</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعال</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>
                                    آنلاین
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell component="th" scope="row" >
                                    <Avatar size='smile' />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1001</Styled.StyledTableCell>
                                <Styled.StyledTableCell>محمد مهری</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1236</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعال</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>
                                    آنلاین
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell component="th" scope="row" >
                                    <Avatar size='smile' />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1001</Styled.StyledTableCell>
                                <Styled.StyledTableCell>محمد مهری</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>1236</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعال</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>
                                    آنلاین
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {/* <Pagination dir='ltr' count={3} variant="outlined" shape="rounded" /> */}
        </div>
    )
}

export default Students