import React from 'react'
import * as Styled from './styled'
import { InputWrapper } from '../styled'
import { useController, useFormContext } from 'react-hook-form';


const Input = ({ placeholder, name, rules, ...props }) => {
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
    <div>
      <InputWrapper>
        <Styled.Input id={name} error={error} placeholder={placeholder} dir='rtl' {...field} {...props} />
      </InputWrapper>
    </div>
  )
}

export default Input