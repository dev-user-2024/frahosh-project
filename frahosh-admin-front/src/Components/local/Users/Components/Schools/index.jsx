import { FormControl, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Button from '../../../../general/Button'
import * as Styled from '../../styled'
import Select from '../../../../general/Forms/Select'
import Input from '../../../../general/Forms/Input'
import { FormProvider, useForm } from 'react-hook-form'
import download from '../../../../../assets/icons/users-download.svg'
import edit from '../../../../../assets/icons/users-edit.svg'
import trash from '../../../../../assets/icons/users-trash.svg'

const Schools = () => {
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
                                    <span>استان </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">تهران</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>شهر </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">تهران</MenuItem>
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
                            </div>
                            <div>
                                <FormControl >
                                    <span>نوع مدرسه </span>
                                    <Select id="my-select" defaultValue="option1" name="status2">
                                        <MenuItem value="option1">تیزهوشان</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>جنسیت </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">دختران</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>مقطع</span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">دبیرستان اول</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>پایه</span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">دوم</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl >
                                    <span>رشته </span>
                                    <Select id="my-select" defaultValue="option1" name="status2">
                                        <MenuItem value="option1">فنی و حرفه ای</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>شاخه </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">هنر</MenuItem>
                                        <MenuItem value="option2">گزینه ۲</MenuItem>
                                        <MenuItem value="option3">گزینه ۳</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <span>زیر شاخه </span>
                                    <Select id="my-select" defaultValue="option1" name="status1">
                                        <MenuItem value="option1">گرافیک</MenuItem>
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
                                <Styled.StyledTableCell>کد مدرسه</Styled.StyledTableCell>
                                <Styled.StyledTableCell>نام مدرسه</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تاریخ فعالسازی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>استان</Styled.StyledTableCell>
                                <Styled.StyledTableCell>شهر</Styled.StyledTableCell>
                                <Styled.StyledTableCell>نوع مدرسه</Styled.StyledTableCell>
                                <Styled.StyledTableCell>مقطع</Styled.StyledTableCell>
                                <Styled.StyledTableCell>رشته</Styled.StyledTableCell>
                                <Styled.StyledTableCell>وضعیت حساب کاربری</Styled.StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell>1025</Styled.StyledTableCell>
                                <Styled.StyledTableCell>درخت دانش </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دولتی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دوره دوم</Styled.StyledTableCell>
                                <Styled.StyledTableCell>فنی و حرفه ای</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعل</Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell>1025</Styled.StyledTableCell>
                                <Styled.StyledTableCell>درخت دانش </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دولتی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دوره دوم</Styled.StyledTableCell>
                                <Styled.StyledTableCell>فنی و حرفه ای</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعل</Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell>1025</Styled.StyledTableCell>
                                <Styled.StyledTableCell>درخت دانش </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دولتی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دوره دوم</Styled.StyledTableCell>
                                <Styled.StyledTableCell>فنی و حرفه ای</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعل</Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell>1025</Styled.StyledTableCell>
                                <Styled.StyledTableCell>درخت دانش </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دولتی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دوره دوم</Styled.StyledTableCell>
                                <Styled.StyledTableCell>فنی و حرفه ای</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعل</Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={trash} alt="trash icon" />
                                </Styled.StyledTableCell>
                                <Styled.StyledTableCell>
                                    <img src={edit} alt="edit icon" />
                                </Styled.StyledTableCell>
                            </Styled.StyledTableRow>
                            <Styled.StyledTableRow>
                                <Styled.StyledTableCell>1025</Styled.StyledTableCell>
                                <Styled.StyledTableCell>درخت دانش </Styled.StyledTableCell>
                                <Styled.StyledTableCell>1402/02/01</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>تهران</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دولتی</Styled.StyledTableCell>
                                <Styled.StyledTableCell>دوره دوم</Styled.StyledTableCell>
                                <Styled.StyledTableCell>فنی و حرفه ای</Styled.StyledTableCell>
                                <Styled.StyledTableCell sx={{ color: '#11AA63' }}>فعل</Styled.StyledTableCell>
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
        </div >
    )
}

export default Schools