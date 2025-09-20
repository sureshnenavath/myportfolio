import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode,
  LightMode,
} from '@mui/icons-material';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        background: isDarkMode ? 'linear-gradient(45deg, #1a1a1a, #2d2d2d)' : 'linear-gradient(45deg, #fff, #f5f5f5)',
        height: '100%',
        color: isDarkMode ? '#fff' : '#000',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Nenavath Suresh
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: isDarkMode ? '#fff' : '#000' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText
              primary={
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path
                      ? '#6366f1'
                      : isDarkMode ? '#fff' : '#000',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    width: '100%',
                  }}
                >
                  {item.name}
                </Button>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isDarkMode
            ? 'rgba(26, 26, 26, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#000',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nenavath Suresh
            </Typography>
          </motion.div>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path
                        ? '#6366f1'
                        : isDarkMode ? '#fff' : '#000',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      position: 'relative',
                      '&:hover': {
                        color: '#6366f1',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          borderRadius: 1,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
          
          <IconButton
            onClick={toggleTheme}
            sx={{
              ml: 2,
              color: isDarkMode ? '#fff' : '#000',
              '&:hover': {
                transform: 'rotate(180deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          
          {isMobile && (
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: isDarkMode ? '#fff' : '#000' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;