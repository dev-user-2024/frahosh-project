import styled from "@emotion/styled";

export const InputWrapper = styled('div')(({theme}) => ({
    "& .MuiFormLabel-root":{
        right: 20,
    },
    "& .MuiInputBase-root":{
        border: 'none'
    },
    "& div":{
        borderRadius: 0
    }
}))