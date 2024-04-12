import { Grid, Toolbar } from "@mui/material"
import * as Styled from "./styled"
import Profile from "./Components/Profile"
import Search from "./Components/Search"

const Header = () => {
  return (
    <Styled.Header>
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            <Search />
          </Grid>
          <Grid item xs={2} md={3} display="flex" justifyContent="end">
          <Profile />
          </Grid>
        </Grid>
      </Toolbar>
    </Styled.Header>
  )
}

export default Header