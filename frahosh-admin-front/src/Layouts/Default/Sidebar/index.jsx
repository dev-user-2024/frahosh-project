import React from 'react'
import * as Styled from './styled'
import { sidebarPanelList } from './list'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/images/frahosh-logo.png'
import { Collapse, ListItem, ListItemButton, ListItemText, Tooltip } from '@mui/material'

const List = ({ item }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem>
                <NavLink to={item.path}>
                    <ListItemButton onClick={item.children ? handleClick : null}>
                        <Tooltip title={item.label} placement="bottom" arrow>
                            <img src={item.icon} alt={item.label} />
                        </Tooltip>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </NavLink>
            </ListItem>
            {item.children &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {item.children.map((childItem, index) => (
                        <ListItem>
                            <NavLink key={index} to={childItem.path}>
                                {childItem.label}
                            </NavLink>
                        </ListItem>
                    ))}
                </Collapse>
            }
        </>
    );
};

const Sidebar = () => {
    return (
        <Styled.Sidebar>
            <nav>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <Styled.List>
                    {
                        sidebarPanelList.map((item, index) => (
                            <List key={index} item={item} />
                        ))
                    }
                </Styled.List>
            </nav>
        </Styled.Sidebar>
    )
}

export default Sidebar