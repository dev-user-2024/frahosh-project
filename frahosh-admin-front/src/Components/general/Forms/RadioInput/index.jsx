import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import * as Styled from './styled'

const RadioInput = ({ options, value, onChange }) => {
  return (
    <Styled.InputWrapper>
      <RadioGroup value={value} onChange={onChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </Styled.InputWrapper>
  );
};

export default RadioInput;