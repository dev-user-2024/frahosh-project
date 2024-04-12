import { FormControl, Grid, MenuItem, Tooltip } from '@mui/material'
import * as Styled from './styled'
import Select from '../../../general/Forms/Select'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useMemo } from 'react'
import Ticket1 from '../../../../assets/icons/ticket-icon-1.svg'
import Ticket2 from '../../../../assets/icons/ticket-icon-2.svg'
import Ticket3 from '../../../../assets/icons/ticket-icon-3.svg'
import { FormProvider, useForm } from 'react-hook-form'

const TicketsCard = () => {
    const methods = useForm()

    const data = useMemo(() => [
        { name: 'شنبه', value: 10 },
        { name: 'یکشنبه', value: 20 },
        { name: 'دوشنبه', value: 30 },
        { name: 'سه شنبه', value: 15 },
        { name: 'چهارشنبه', value: 30 },
        { name: 'پنجشنبه', value: 15 },
        { name: 'جمعه', value: 10 },
    ], []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit()}>
                <Styled.ChartCards container spacing={3} marginBottom={4}>
                    <Grid item sm={12} md={2}>
                        <Styled.TicketBox>
                            <img src={Ticket1} alt="" />
                            <h4>52</h4>
                            <p>کل تیکت ها</p>
                        </Styled.TicketBox>
                    </Grid>
                    <Grid item sm={12} md={2}>
                        <Styled.TicketBox>
                            <img src={Ticket2} alt="" />
                            <h4>12</h4>
                            <p>پاسخ داده نشده</p>
                        </Styled.TicketBox>
                    </Grid>
                    <Grid item sm={12} md={2}>
                        <Styled.TicketBox>
                            <img src={Ticket3} alt="" />
                            <h4>40</h4>
                            <p>پاسخ داده شده</p>
                        </Styled.TicketBox>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div>

                            <FormControl >
                                <p>تعداد تیکت های ثبت شده</p>
                                <Select id="my-select" defaultValue="option1" name='weeks'>
                                    <MenuItem value="successful">هفته جاری</MenuItem>
                                    <MenuItem value="unsuccessful">گزینه 2</MenuItem>
                                </Select>
                            </FormControl>
                            <ResponsiveContainer width="100%" height="100%">
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
                </Styled.ChartCards>
            </form>
        </FormProvider >
    )
}

export default TicketsCard