
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText
} from "@mui/material";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import {Logout} from "../../assests/image/svg";
import { logoutUser } from "../../slices/authSlice";


export default function SidebarFooter() {
  const [open, setOpen] = useState(true);
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <>
        <List sx={{ mt: {xs: 4, lg: 8} }}>
      <ListItem
        key="setting"
        disablePadding
        sx={{
          display: "block",
          "&:hover": {
            background: "#ffffff",
          },
        }}
      >
        {/* <Link to="/logout"> */}
          <ListItemButton
            sx={{
              color: "#1D9BF0",
              minHeight: 40,
              pl: 3,
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: 18,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Box component="img" src={Logout} />
            </ListItemIcon>
            <ListItemText primary="خروج" sx={{ opacity: open ? 1 : 0 }} onClick={()=>{
              dispatch(logoutUser(null))
              navigate('login')
            }}/>
          </ListItemButton>
        {/* </Link> */}
      </ListItem>
    </List>
    </>
  );
            }
