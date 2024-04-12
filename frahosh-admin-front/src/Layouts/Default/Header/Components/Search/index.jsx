import { FormProvider, useForm } from "react-hook-form"
import Input from "../../../../../Components/general/Forms/Input"
import SearchIcon from '../../../../../assets/icons/search-icon.svg'
import * as Styled from './styled'

const Search = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <Styled.Form action="">
        <Input placeholder="جست و جو" variant="standard" name="status"  InputProps={{ startAdornment: <img alt="search icon" src={SearchIcon} /> }} />
      </Styled.Form>
    </FormProvider>
  )
}

export default Search