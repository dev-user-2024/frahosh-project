import * as Styled from './styled'
import { Box, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import RadioInput from '../../../../general/Forms/RadioInput' 
import edit from '../../../../../assets/icons/users-edit.svg'
import trash from '../../../../../assets/icons/users-trash.svg'

const Table = () => {
    const methods = useForm()

    return (
        <div>
            <Styled.TableHead container xs={12}>
                <Grid container xs={12}>
                    <Grid item xs={1}>
                        <Box>
                            <p >کدنقش</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >عنوان نقش</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >کد کاربر</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >عنوان دسترسی</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >شرح دسترسی</p>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <p >وضعیت دسترسی</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >حذف/ویرایش</p>
                        </Box>
                    </Grid>
                </Grid>
            </Styled.TableHead>
            <Styled.TableBody container xs={12}>
                <Grid container xs={12}>
                    <Grid item xs={1}>
                        <Box>
                            <p >1010</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >اولیا</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >459563</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >درسترسی به دل نوشته ها</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >دسترسی پنجم اولیا...</p>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormProvider {...methods}>
                                <form action="">
                                    <RadioInput
                                        label="وضعیت نمایش اثر:"
                                        name="permission_level"
                                        options={[
                                            {
                                                label: "دارد",
                                                value: "دارد",
                                            },
                                            {
                                                label: "ندارد",
                                                value: "ندارد",
                                            },
                                        ]}
                                    />
                                </form>
                            </FormProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <img src={trash} alt="" />
                            <img src={edit} alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={1}>
                        <Box>
                            <p >1010</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >اولیا</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >459563</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >درسترسی به دل نوشته ها</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >دسترسی پنجم اولیا...</p>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormProvider {...methods}>
                                <form action="">
                                    <RadioInput
                                        label="وضعیت نمایش اثر:"
                                        name="permission_level"
                                        options={[
                                            {
                                                label: "دارد",
                                                value: "دارد",
                                            },
                                            {
                                                label: "ندارد",
                                                value: "ندارد",
                                            },
                                        ]}
                                    />
                                </form>
                            </FormProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <img src={trash} alt="" />
                            <img src={edit} alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={1}>
                        <Box>
                            <p >1010</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >اولیا</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >459563</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >درسترسی به دل نوشته ها</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >دسترسی پنجم اولیا...</p>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormProvider {...methods}>
                                <form action="">
                                    <RadioInput
                                        label="وضعیت نمایش اثر:"
                                        name="permission_level"
                                        options={[
                                            {
                                                label: "دارد",
                                                value: "دارد",
                                            },
                                            {
                                                label: "ندارد",
                                                value: "ندارد",
                                            },
                                        ]}
                                    />
                                </form>
                            </FormProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <img src={trash} alt="" />
                            <img src={edit} alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={1}>
                        <Box>
                            <p >1010</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >اولیا</p>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <p >459563</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >درسترسی به دل نوشته ها</p>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <p >دسترسی پنجم اولیا...</p>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box>
                            <FormProvider {...methods}>
                                <form action="">
                                    <RadioInput
                                        label="وضعیت نمایش اثر:"
                                        name="permission_level"
                                        options={[
                                            {
                                                label: "دارد",
                                                value: "دارد",
                                            },
                                            {
                                                label: "ندارد",
                                                value: "ندارد",
                                            },
                                        ]}
                                    />
                                </form>
                            </FormProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <img src={trash} alt="" />
                            <img src={edit} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Styled.TableBody>
        </div>
    )
}

export default Table