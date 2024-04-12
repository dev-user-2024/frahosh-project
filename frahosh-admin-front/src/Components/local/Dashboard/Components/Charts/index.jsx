import { FormControl, FormLabel, Grid, MenuItem } from '@mui/material';
import * as Styled from './styled';
import { useMemo } from 'react';
import { Line, LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Select from '../../../../general/Forms/Select';
import { FormProvider, useForm } from 'react-hook-form'

const Charts = () => {
    const methods = useForm()

    const data = useMemo(() => [
        { name: 'A', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 30 },
        { name: 'D', value: 15 },
        { name: 'E', value: 30 },
        { name: 'F', value: 15 },
    ], []);

    return (
        <Styled.ChartCards container spacing={3}>
            <Grid item sm={12} md={6}>
                <div>
                    <FormProvider {...methods}>
                        <form action="" onSubmit={methods.handleSubmit()}>
                            <FormControl >
                                <Styled.SelectFields>
                                    <h4>کاربران آنلاین در لحظه</h4>
                                    <div>
                                        <label>تعداد تیکت های ثبت شده</label>
                                        <Select id="my-select" defaultValue="option1" name='weeks'>
                                            <MenuItem value="successful">هفته جاری</MenuItem>
                                            <MenuItem value="unsuccessful">گزینه 2</MenuItem>
                                        </Select>
                                    </div>
                                </Styled.SelectFields>
                            </FormControl>
                        </form>
                    </FormProvider>
                    <ResponsiveContainer width="100%" height={217}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Grid>
            <Grid item sm={12} md={6}>
                <div>
                    <FormProvider {...methods}>
                        <form action="" onSubmit={methods.handleSubmit()}>
                            <FormControl >
                                <Styled.SelectFields>
                                    <h4>گزارش حضور کاربران</h4>
                                    <div>
                                        <Select id="my-select" defaultValue="option1" name='weeks'>
                                            <MenuItem value="successful">هفته جاری</MenuItem>
                                            <MenuItem value="unsuccessful">گزینه 2</MenuItem>
                                        </Select>
                                        <Select id="my-select" defaultValue="option1" name='weeks'>
                                            <MenuItem value="successful">هفته جاری</MenuItem>
                                            <MenuItem value="unsuccessful">گزینه 2</MenuItem>
                                        </Select>
                                    </div>
                                </Styled.SelectFields>
                            </FormControl>
                        </form>
                    </FormProvider>
                    <ResponsiveContainer width="100%" height={217}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Grid>
        </Styled.ChartCards >
    )
}

export default Charts;