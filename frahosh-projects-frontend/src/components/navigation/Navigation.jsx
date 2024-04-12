
// import React from 'react'
import Button from "../buttons/Buttons"
import styles from "./navigation.module.css"
import React, { useContext, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.png"

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuList, Select } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  const [open, setState] = useState(false);
  const { i18n } = useTranslation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container maxWidth="lg" disableGutters="true">
      <Toolbar className={`${styles.navigation} ${i18n.language === 'fa' && styles.rtl}`}>
        <div className={styles.navigation_logo}>
        <img alt="" src={logo}/>
        {t('home.navbar.logo')}
        </div>
        <div className={styles.navigation_links} >
          <div style={{ position: "relative" }}>
            <p onClick={handleClick}>{t('home.navbar.language')}</p>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage("fa")}>فارسی</MenuItem>
            </Menu>
          </div>
          <a href="https://mag.frabyte.ir" target="_blank">{t('home.navbar.mag')}</a>
          <Link onClick={()=>{window.scrollTo({top:"2600",left:"0",behavior:"smooth"})}}>{t('home.navbar.works')}</Link>
          <Link onClick={()=>{window.scrollTo({top:"5000",left:"0",behavior:"smooth"})}}>{t('home.navbar.aboutUs')}</Link>
          <Link>{t('home.navbar.contactUs')}</Link>
          <Link>
            <Button
              buttonType="button1"
              type="submit"
            >
              {t('home.navbar.call')}
            </Button>
          </Link>
        </div>
        <IconButton
          edge="start"
          color="info"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            display: {
              xs: "block",
              md: "none"
            }
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{
              p: 3,
              px: 5,
              height: 1,
              backgroundColor: "#fff"
            }}
          >

            <IconButton sx={{ mb: 2 }}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }} >
              <ListItemButton>
                {/* <ListItemIcon>
                  <ImageIcon sx={{ color: "primary.main" }} />
                </ListItemIcon> */}
                <ListItemText primary={t('home.navbar.works')} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={t('home.navbar.aboutUs')} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={t('home.navbar.contactUs')} />
              </ListItemButton>
              <ListItemButton>
              <a href="https://mag.frabyte.ir" target="_blank">{t('home.navbar.mag')}</a>
              </ListItemButton>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </Container >
  );
}
