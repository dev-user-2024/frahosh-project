import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Avatar, InputBase, Badge, MenuItem, Menu, alpha, styled,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import FaceUser from '../../assests/image/avatar/user.png';
import Flag from '../../assests/image/avatar/flag.png';
import {
  Notification, Moon, Category, SearchIcon,
} from '../../assests/image/svg';
import DrawerActionButton from './drawerActionButton';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import MainContext from '../../context';
const Searchs = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontFamily: 'vazir',
  fontSize: '0.8rem',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} sx={{ pr: 4, fontFamily: 'vazir', fontSize: '0.9rem' }}>پروفایل</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ pr: 4, fontFamily: 'vazir', fontSize: '0.9rem' }}>اکانت من</MenuItem>
    </Menu>
  );
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src={Flag} sx={{ width: 30, height: 30 }} />
        </IconButton>
        <p>پروفایل</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Box component="img" src={Category} />
        </IconButton>
        <p>گروه بندی</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="medium" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Box component="img" src={Moon} />
          </Badge>
        </IconButton>
        <p>پیام</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={12} color="error">
            <Box component="img" src={Notification} />
          </Badge>
        </IconButton>
        <p>پیام</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src={FaceUser} sx={{ width: 30, height: 30 }} />
        </IconButton>
        <p>پروفایل</p>
      </MenuItem>
    </Menu>
  );
 const handleToggleMode=useContext(MainContext).handleToggleMode;
 const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
            sx={{
              mr: 2,
              display: {
                xs: 'inline-block',
                sm: 'inline-block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
            }}
          >
            <DrawerActionButton />
          </IconButton>
          <Searchs>
            <SearchIconWrapper>
              <Box component="img" src={SearchIcon} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="جست و جو"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searchs>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="medium"
              color="inherit"
            >
              <Avatar src={Flag} sx={{ width: 26, height: 26 }} />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Box component="img" src={Category} />
            </IconButton>
            <IconButton size="medium" aria-label="show 4 new mails" color="inherit" onClick={handleToggleMode}>
              <Box component="img" src={Moon}  />
            </IconButton>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Box component="img" src={Notification} />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={FaceUser} sx={{ width: 26, height: 26 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
