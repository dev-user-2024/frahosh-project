import { Avatar } from "@mui/material";
import farahoshAvatar from "../../assests/image/svg/Group.png"
import React from "react";

const SidebarHeader = ()=>{
    return(
        <>
            <Avatar 
                src={farahoshAvatar}
                variant="rounded"
                sx={{
                    width:100,
                    mt:2,
                    marginLeft:3
                }}
            />
        </>
    )
}
export default SidebarHeader;
