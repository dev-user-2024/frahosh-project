import { FormControl, Grid, MenuItem, Tooltip } from '@mui/material';
import * as Styled from './styled'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Select from '../../../../general/Forms/Select';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const Charts = () => {
  const data = useMemo(() => [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
    { name: 'D', value: 15 },
    { name: 'E', value: 30 },
    { name: 'F', value: 15 },
  ], []);

  const methods = useForm()

  return (
    <Styled.ChartCards container spacing={3}>
      <Grid item sm={12} md={6}>
        <div>
          <ResponsiveContainer width="100%" height="100%">
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
      <Grid item sm={12} md={6}>
        <div>
          <FormProvider {...methods}>
            <form action="">
              <FormControl >
                <Select id="my-select" defaultValue="1402" name="status1">
                  <MenuItem value="1400">1400</MenuItem>
                  <MenuItem value="1401">1401</MenuItem>
                  <MenuItem value="1402">1402</MenuItem>
                </Select>
                <Select id="my-select" defaultValue="option1" name="status2">
                  <MenuItem value="successful">پرداخت موفق</MenuItem>
                  <MenuItem value="unsuccessful">پرداخت ناموفق</MenuItem>
                </Select>
              </FormControl>
            </form>
          </FormProvider>
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
  );
};

export default Charts;