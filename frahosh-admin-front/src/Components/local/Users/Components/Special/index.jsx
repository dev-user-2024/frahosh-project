import { FormControl, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Button from '../../../../general/Button'
import * as Styled from '../../styled'
import Select from '../../../../general/Forms/Select'
import Input from '../../../../general/Forms/Input'
import { FormProvider, useForm } from 'react-hook-form'
import download from '../../../../../assets/icons/users-download.svg'
import edit from '../../../../../assets/icons/users-edit.svg'
import trash from '../../../../../assets/icons/users-trash.svg'
import Avatar from '../../../../general/Avatar'

const Special = () => {
    const methods = useForm()
    return (
        <div>
            <Grid container>
                <Styled.UserOptions item>
                    <Styled.buttons>
                        <Button>
                            <span>+</span>
                            نقش های جدید
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
                                        <Input placeholder="جست و جوی ولی ..." name="status3" />
                                    </Styled.SearchBox>
                                </FormControl>
                            </div>
                        </form>
                    </FormProvider>
                </Styled.UserOptions>
            </Grid>
            {/* <Pagination dir='ltr' count={3} variant="outlined" shape="rounded" /> */}
        </div>
    )
}

export default Special