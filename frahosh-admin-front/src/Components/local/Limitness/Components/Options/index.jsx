import { FormProvider, useForm } from 'react-hook-form'
import Button from '../../../../general/Button'
import * as Styled from './styled'
import { FormControl, MenuItem } from '@mui/material'
import Select from '../../../../general/Forms/Select'
import { Link } from 'react-router-dom'

const Options = () => {
    const methods = useForm()

    return (
        <Styled.OptionsContainer>
            <Styled.notification xs={12}>
                <h5>ادمین عزیز.</h5>
                <p>با توجه به اطلاعات قبلی ای که تیم فراهوش در دست دارد، ایجاد یک سری از دسترسی ها را لازم دانستیم و به صورت پیش‌فرض برایتان تعریف شده است. شما میتوانید دسترسی جدید تعریف کنید یا دسترسی ها را حذف کنید و یا هر کدام را فعال یا غیرفعال کنید.</p>
            </Styled.notification>
            <Styled.buttons>
                <Link to={'/limitness/limitness-add'}>
                    <Button>
                        <span>+</span>
                        محدودیت جدید
                    </Button>
                </Link>
            </Styled.buttons>
            <h4>
                فیلتر ها
            </h4>
            <FormProvider {...methods}>
                <form action="">
                    <FormControl >
                        <span>نقش کاربر</span>
                        <Select id="my-select" defaultValue="option1" name="status2">
                            <MenuItem value="option1">نقشی را انتخاب کنید</MenuItem>
                            <MenuItem value="option2">گزینه ۲</MenuItem>
                            <MenuItem value="option3">گزینه ۳</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <span>مدرسه </span>
                        <Select id="my-select" defaultValue="option1" name="status1">
                            <MenuItem value="option1">مدرسه را انتخاب کنید</MenuItem>
                            <MenuItem value="option2">گزینه ۲</MenuItem>
                            <MenuItem value="option3">گزینه ۳</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <span>وضعیت دسترسی</span>
                        <Select id="my-select" defaultValue="option1" name="status1">
                            <MenuItem value="option1">همه</MenuItem>
                            <MenuItem value="option2">گزینه ۲</MenuItem>
                            <MenuItem value="option3">گزینه ۳</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </FormProvider>
        </Styled.OptionsContainer>
    )
}

export default Options