import { FormControl, Grid, MenuItem } from '@mui/material'
import * as Styled from './styled'
import Button from '../../../../general/Button'
import arrowLeft from '../../../../../assets/icons/LimitnessAdd-arrow-left.svg'
import { FormProvider, useForm } from 'react-hook-form'
import Select from '../../../../general/Forms/Select'

const LimitnessAdd = () => {
    const methods = useForm()
    return (
        <Styled.LimitnessAddContainer>
            <Styled.LimitnessHeader>
                <Button startIcon={<img src={arrowLeft} />}>
                    بازگشت
                </Button>
                <h4>اضافه کردن محدودیت جدید</h4>
            </Styled.LimitnessHeader>
            <FormProvider {...methods}>
                <form action="">
                    <Styled.FormSections>
                        <h4>برای دانش آموز</h4>
                        <div>
                            <FormControl >
                                <label htmlFor='my-select'>نام دانش آموز</label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">سعید رحمانی</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Styled.FormSections>
                    <Styled.FormSections>
                        <h4>برای مدرسه</h4>
                        <div>
                            <FormControl >
                                <label>انتخاب محدودیت برای </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">مدرسه</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>نام مدرسه </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">درخت دانش</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>مقطع </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">دبیرستان اول</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>پایه</label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">دوم</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>مدرسه </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1">فروغ دانش</MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>پذیرش دانش آموزان از تاریخ </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1"></MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl >
                                <label>تا تاریخ </label>
                                <Select id="my-select" defaultValue="option1" name="status1">
                                    <MenuItem value="option1"></MenuItem>
                                    <MenuItem value="option2">گزینه ۲</MenuItem>
                                    <MenuItem value="option3">گزینه ۳</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Button>ثبت محدودیت</Button>
                    </Styled.FormSections>

                </form>
            </FormProvider>
        </Styled.LimitnessAddContainer>
    )
}

export default LimitnessAdd