import styled from "@emotion/styled";
import MuiAvatar from "@mui/material/Avatar";


export const Avatar = styled(({ size, ...props }) => ( <MuiAvatar {...props} /> ))(({ theme, size }) => ({
    width: size === "medium" ? 67 : size === "large" ? 100 : 38,
    height: size === "medium" ? 67 : size === "large" ? 100 : 38,
  }));