import React from 'react'
import { InputWrapper } from '../styled'
import * as Styled from './styled'
import { useController, useFormContext } from 'react-hook-form';

const Select = ({ children, name, rules, ...props }) => {
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <InputWrapper>
            <Styled.Select {...field} {...props}>{children}</Styled.Select>
        </InputWrapper>
    )
}

export default Select