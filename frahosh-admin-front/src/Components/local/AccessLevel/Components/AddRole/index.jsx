import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as Styled from './styled'
import Button from '../../../../general/Button'
import { FormControl, MenuItem } from '@mui/material'
import Select from '../../../../general/Forms/Select'
import arrowLeft from '../../../../../assets/icons/LimitnessAdd-arrow-left.svg'
import Input from '../../../../general/Forms/Input'

const AddRole = () => {
  const methods = useForm()

  return (
    <Styled.AddRoleContainer>
      <Styled.AddRoleHeader>
        <Button startIcon={<img src={arrowLeft} />}>
          بازگشت
        </Button>
        <h4>اضافه کردن نقش جدید</h4>
      </Styled.AddRoleHeader>
      <FormProvider {...methods}>
        <form action="">
          <Styled.FormSections>
            <div>
              <FormControl >
                <label htmlFor='my-select'>عنوان دانش</label>
                <Select id="my-select" defaultValue="option1" name="status3">
                  <MenuItem value="option1">دانش آموز</MenuItem>
                  <MenuItem value="option2">گزینه ۲</MenuItem>
                  <MenuItem value="option3">گزینه ۳</MenuItem>
                </Select>
              </FormControl>
              <FormControl >
                <label htmlFor='my-select'>کد نقش</label>
                <Select id="my-select" defaultValue="option1" name="status4">
                  <MenuItem value="option1">1010</MenuItem>
                  <MenuItem value="option2">گزینه ۲</MenuItem>
                  <MenuItem value="option3">گزینه ۳</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Styled.FormSections>
          <Styled.FormSections>
            <h4>انتخاب دسترسی</h4>
            <div>
              <FormControl >
                <label htmlFor='my-select'>عنوان دسترسی</label>
                <Input name="status1" placeholder='دسترسی مورد نظر خود را بنویسید...' />
              </FormControl>
            </div>
          </Styled.FormSections>
          <Styled.FormSections>
            <div>
              <FormControl >
                <label htmlFor='my-select'>شرح دسترسی</label>
                <Input
                  multiline
                  rows={6}
                  name="status2"
                  placeholder='توضیحات دسترسی را اینجا بنویسید...'
                />
              </FormControl>
            </div>
            <Button>ثبت نقش</Button>
          </Styled.FormSections>
        </form>
      </FormProvider>
    </Styled.AddRoleContainer>
  )
}

export default AddRole