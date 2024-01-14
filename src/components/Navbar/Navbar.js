import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { mainNavitems } from './consts/navlist';
import { SportsRugbySharp } from '@mui/icons-material';
import { navbarStyles } from './styles';
import { useParams ,useNavigate } from "react-router-dom";

const Navbar =() =>{
  const navigate =useNavigate();
  return(
    <Drawer
    sx={navbarStyles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavitems.map((item, index) => (
        <ListItem
            button
            key={item.id}
            onClick={() => navigate(item.route)}
        >
          <ListItemIcon 
            sx={navbarStyles.icons}
          >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={navbarStyles.item}
              primary={item.label}
            />
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}
export default Navbar;