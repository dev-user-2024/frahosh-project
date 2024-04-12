import * as Styled from './styled'
import { Box, FormControl, Grid, MenuItem, TextField } from '@mui/material'
import Input from '../../Components/general/Forms/Input'
import { InputLabel } from '@mui/material';
import Button from '../../Components/general/Button';
import Select from '../../Components/general/Forms/Select';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { blogApi } from '../../Services/blog';
import { toast } from 'react-toastify';

const UploadArticle = () => {
    const [value, setValue] = useState('');
    const { mutate, isLoading, data } = useMutation({
        mutationFn: blogApi,
        onSuccess: () => {
            toast.success("مقاله شما با موفقیت ثبت شد");
            methods.reset();
        },
    })

    const methods = useForm({ defaultValues: { title: "", keywords: "", image: "", category: "", links: "" } })

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    }

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    const onSubmit = (data) => {
        mutate(data)
    }

    return (
        <FormProvider {...methods}>
            <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
                <Styled.ArticleContainer container spacing={1} gap={5} justifyContent={'space-between'}>
                    <Grid item xs={12} md={5}>
                        <Box marginTop={3}>
                            <InputLabel>عنوان محتوا (Title)</InputLabel>
                            <Input name='title' />
                        </Box>

                        <Box marginTop={3}>
                            <InputLabel>کلمات کلیدی (Keywords)</InputLabel>
                            <Input name='keywords' />
                            <Button>اضافه کردن</Button>
                        </Box>

                        <Box marginTop={3}>
                            <InputLabel>تصویر مرتبط</InputLabel>
                            <Input name='image' />
                            <Button>انتخاب تصویر</Button>
                        </Box>

                        <Box marginTop={3}>
                            <InputLabel>دسته‌بندی</InputLabel>
                            <Select name='category' defaultValue={10}>
                                <MenuItem value={'10'}>-</MenuItem>
                                <MenuItem value={'20'}>-</MenuItem>
                                <MenuItem value={'30'}>-</MenuItem>
                            </Select>
                        </Box>

                        <Box marginTop={3}>
                            <InputLabel>لینک کوتاه</InputLabel>
                            <Input name='links' />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Box marginTop={3}>
                            <InputLabel>متن محتوا (Content)</InputLabel>
                            <ReactQuill
                                value={value}
                                modules={modules}
                                formats={formats}
                                style={{ borderRadius: 10, background: '#fff' }}

                            />
                        </Box>
                    </Grid>
                </Styled.ArticleContainer>
                <button type='submit'>submit form</button>
            </form>
            {/* <DevTool/> */}
        </FormProvider>
    )
}

export default UploadArticle