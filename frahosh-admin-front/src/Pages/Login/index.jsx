import { Checkbox, FormControlLabel, Grid, InputLabel, Typography } from '@mui/material'
import * as Styled from "./styled"
import { Box } from '@mui/system'
import React from 'react'
import Button from '../../Components/general/Button'
import Input from '../../Components/general/Forms/Input'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Styled.LoginContainer container>
            <Box>
                <Typography variant="h5">
                    فراهوش
                </Typography>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item md={7} xs={10} marginBottom={4}>
                        <InputLabel htmlFor="username-input">نام کاربری</InputLabel>
                        <Input fullWidth id="username-input" />
                    </Grid>
                    <Grid item md={7} xs={10} marginBottom={4}>
                        <InputLabel htmlFor="password-input">رمز عبور</InputLabel>
                        <Input fullWidth id="password-input" type="password" />
                    </Grid>
                    <Grid item md={7} xs={10} marginBottom={3}>
                        <FormControlLabel
                            control={<Checkbox
                                color="primary"
                                icon={
                                    <Box
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: '#fff',
                                            borderRadius: 1,
                                        }}
                                    />
                                }
                            />}
                            label="مرا به خاطر بسپار"
                        />
                    </Grid>
                    <Grid item md={7} xs={10}>
                        <Button fullWidth variant="contained" color="primary">
                            ورود
                        </Button>
                    </Grid>
                    <Grid item md={7} xs={10}>
                        <Typography variant="body2">
                            <Link href="#">رمز عبور خود را فراموش کرده اید؟</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
        </Styled.LoginContainer >
    )
}

export default Login