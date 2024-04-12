import { Link } from "react-router-dom";
import Button1 from "../buttons/button.component";
import FaraHooshLogo from "../../assets/image/logo-white1.png";
import { ReactComponent as BtnLoginIcon } from "../../assets/icons/login.svg";
import { ReactComponent as BtnLoginIconn } from "../../assets/icons/login-icon.svg";
import { ReactComponent as Btnmenu } from "../../assets/icons/Menu-Hotdog.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import React, { useState  , useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import styles from "./navigation-2.styles.module.css";
import IRANSansXWoff2 from "../../assets/fonts/Iran-sansx-font/woff2/IRANSansX-Black.woff2";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from "@mui/material/styles";
import mainContext from "../../context/index.js";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import {InputBase,List ,Collapse, Menu, MenuItem,Button, Box, Fab , Drawer , IconButton,Divider , ListItemButton,ListItemText,ListItemIcon} from "@mui/material";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: "230px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const search = (
  <StyledSearch sx={{ mb: 2 }}>
    <Link to="/test">
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Link>
    <StyledInputBase
      placeholder="جست و جو ..."
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);
const Navigation2 = () => {

    const theme = useTheme();
    const { handleThemeChange } = useContext(mainContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick2 = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl(null);
    };
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const [open1, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open1);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigation}>
        <div className={styles.navLinkContainer}>
            <Link className={styles.navLink} to="/">
              <img src={FaraHooshLogo} alt="frahoshlogo" className="logo" />
            </Link>
            <Button
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              className={styles.navLinkbutton}
              startIcon={<KeyboardArrowDownIcon />}
            >
             سرویس ها
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}

            >
              <Link to="/Counseling"><MenuItem sx={{color: theme.palette.mode === "dark" ? "#fff" : "#000",}} onClick={handleClose2}>سامانه مشاوره</MenuItem></Link>
              <Link to="/school"><MenuItem sx={{color: theme.palette.mode === "dark" ? "#fff" : "#000",}}  onClick={handleClose2}>سامانه مدرسه</MenuItem></Link>
              <Link to="/Big-Blue-Button"><MenuItem sx={{color: theme.palette.mode === "dark" ? "#fff" : "#000",}}  onClick={handleClose2}>سامانه بیگ بلوباتن</MenuItem></Link>
              <Link to="/podcast"><MenuItem sx={{color: theme.palette.mode === "dark" ? "#fff" : "#000",}}  onClick={handleClose2}>پادکست فراهوش</MenuItem></Link>
            </Menu>
            <Link className={styles.navLink} to="/School">
              طرح رایگان ویژه مدارس
            </Link>
            <Link className={styles.navLink} to="/about-us">
              درباره‌ی ما
            </Link>
            <Link className={styles.navLink} to="/contact-us">
              تماس با ما
            </Link>
          </div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,

              display: {
                sm: "block",
                md: "none",
              },
            }}
          >
            <Btnmenu />
          </IconButton>
          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
            PaperProps={{
              sx: {
                width: 350,
              },
            }}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#rgba(255, 255, 255, 1)",
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <ChevronRightIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider variant="fullWidth" sx={{ mb: 2 }} />
              {search}
              <Box sx={{ fontFamily: "IRANSansX" }}>
                <List>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                      primary="سرویس ها"
                    />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link to="/Counseling" underline="none">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText
                            primary="سامانه مشاوره"
                            sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000",
                          }}
                          />
                        </ListItemButton>
                      </Link>
                      <Link to="/School" underline="none">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText
                            primary="سامانه مدرسه"
                            sx={{ textAlign: "right" , color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                          />
                        </ListItemButton>
                      </Link>
                      <Link to="/Big-Blue-Button" underline="none">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText
                            primary="سامانه بیگ بلو باتن"
                            sx={{ textAlign: "right" , color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                          />
                        </ListItemButton>
                      </Link>
                      <Link to="/Podcast" underline="none">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText
                            primary="پادکست فراهوش"
                            sx={{ textAlign: "right" , color: theme.palette.mode === "dark" ? "#fff" : "#000"}}
                          />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  <Link to="/School" underline="none">
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="طرح رایگان ویژه مدارس"
                        sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/about-us" underline="none">
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="درباره ما"
                        sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/contact-us" underline="none">
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="تماس با ما"
                        sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/careers" underline="none">
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="همکاری با ما"
                        sx={{ textAlign: "right", color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Box>
            </Box>
          </Drawer>
          <Link className={styles.navLinkms} to="/">
            <img src={FaraHooshLogo} alt="Logo" className="logo" />
          </Link>
          <Link
            className={`${styles.navBtnLoginContainerm} ${styles.navLinkm}`}
            to="/login"
          >
            <BtnLoginIconn />
          </Link>
          <Box sx={{display:"flex", alignItems:"center"}}>
            <Fab
            aria-label="ThemeChanger"
            variant="extended"
            size="small"
            color="secondary"
            onClick={handleThemeChange}
            sx={{ ml: 2, color: "whitesmoke", mt: 3 }}
        >
            {theme.palette.mode === "dark" ? (
                <WbSunnyOutlined sx={{ mr: 1 }} />
            ) : (
                <NightlightOutlined sx={{ mr: 1 }} />
            )}
            {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
        </Fab>
            <Link
            className={`${styles.navBtnLoginContainer} ${styles.navLink}`}
            to="/login"
          >
            <Button1 buttonType="navigationButton" type="button">
              <BtnLoginIcon />
              ورود | ثبت نام
            </Button1>
          </Link>
            </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navigation2;
