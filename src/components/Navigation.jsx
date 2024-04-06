import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [['Home', '/react-portfolio-template'], ['About', '/react-portfolio-template/about'], ['Blog', '/react-portfolio-template/blog'], ['Contact', '/react-portfolio-template/contact']];

function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <NavLink to="/react-portfolio-template">
        <p>Yuji Sato</p>
      </NavLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink className="nav-link" to={item[1]} key={item[0]}>
            <ListItem key={item[0]} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink className="nav-bar" to="/react-portfolio-template">
            <p>Yuji Sato</p>
          </NavLink>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <NavLink className="nav-link" to={item[1]} key={item[0]}>
                <Button key={item[0]} sx={{ color: '#fff' }}>
                  {item[0]}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}



// import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

// function Navigation() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)
  
//   return (
//     <nav className="navigation">
//       <div className="hamburger"
//         onClick={() => {
//           setIsNavExpanded(!isNavExpanded);
//         }}>
//         <FontAwesomeIcon icon={isNavExpanded ? faToggleOn : faToggleOff} size="3x"/>
//       </div>
//       <div className={isNavExpanded ? "nav-bar expanded" : "nav-bar"}>
//         <ul>
//           <li className="nav-item">
//           <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/react-portfolio-template">
//             Home
//             <span className="sr-only">(current)</span>
//           </NavLink>
//           </li><div className="divider-bar"/>
//           <li className="nav-item">
//           <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/react-portfolio-template/about">
//             About
//           </NavLink>
//           </li><div className="divider-bar"/>
//           <li className="nav-item">
//           <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/react-portfolio-template/blog">
//             Blog
//           </NavLink>
//           </li><div className="divider-bar"/>
//           <li className="nav-item">
//           <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/react-portfolio-template/contact">
//             Contact
//           </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default Navigation;