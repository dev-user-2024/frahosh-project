import { Box, Tooltip } from '@mui/material'
import * as Styled from './styled'
import Avatar from '../../../../../Components/general/Avatar'
import NotificatoinIcon from '../../../../../assets/icons/notification-icon.svg'
import MoonIcon from '../../../../../assets/icons/moon-icon.svg'
import CategoryIcon from '../../../../../assets/icons/dashboard-icon.svg'
import FlagIcon from '../../../../../assets/icons/flag-icon.svg'

const Profile = () => {
  return (
    <Styled.Profile direction="row" alignItems="baseline">
      <Box>
        <Tooltip title="زبان" placement="bottom" arrow>
          <img src={FlagIcon} alt="category icon" />
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="دسته بندی" placement="bottom" arrow>
          <img src={CategoryIcon} alt="category icon" />
        </Tooltip>

      </Box>
      <Box>
        <Tooltip title="مود شب" placement="bottom" arrow>
          <img src={MoonIcon} alt="moon icon" />
        </Tooltip>

      </Box>
      <Box>
        <Tooltip title="اعلان ها" placement="bottom" arrow>
          <img src={NotificatoinIcon} alt="Notification Icon" />
        </Tooltip>

      </Box>
      <Box>
        <Avatar size='smile'></Avatar>
      </Box>
    </Styled.Profile>
  )
}

export default Profile