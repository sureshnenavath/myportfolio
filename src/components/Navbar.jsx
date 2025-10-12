import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode,
  LightMode,
  Home,
  Person,
  Work,
  Code,
  School,
  EmojiEvents,
  Email,
} from '@mui/icons-material';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home fontSize="small" /> },
    { name: 'About', path: '/about', icon: <Person fontSize="small" /> },
    { name: 'Experience', path: '/experience', icon: <Work fontSize="small" /> },
    { name: 'Projects', path: '/projects', icon: <Code fontSize="small" /> },
    { name: 'Education', path: '/education', icon: <School fontSize="small" /> },
    { name: 'Achievements', path: '/achievements', icon: <EmojiEvents fontSize="small" /> },
    { name: 'Contact', path: '/contact', icon: <Email fontSize="small" /> },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...(isDarkMode ? {
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        } : {
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }),
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          borderBottom: isDarkMode 
            ? '1px solid rgba(99, 102, 241, 0.2)' 
            : '1px solid rgba(99, 102, 241, 0.15)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NS
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: isDarkMode ? '#a5b4fc' : '#6366f1',
            '&:hover': {
              background: isDarkMode 
                ? 'rgba(99, 102, 241, 0.1)' 
                : 'rgba(99, 102, 241, 0.08)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Menu Items */}
      <List sx={{ flex: 1, px: 2, py: 3 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding sx={{ mb: 1 }}>
              <Button
                component={Link}
                to={item.path}
                fullWidth
                startIcon={item.icon}
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5,
                  px: 2.5,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  ...(location.pathname === item.path ? {
                    background: isDarkMode
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    color: isDarkMode ? '#a5b4fc' : '#6366f1',
                    boxShadow: isDarkMode
                      ? '0 4px 12px rgba(99, 102, 241, 0.2)'
                      : '0 4px 12px rgba(99, 102, 241, 0.15)',
                  } : {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(30, 41, 59, 0.7)',
                    '&:hover': {
                      background: isDarkMode
                        ? 'rgba(99, 102, 241, 0.1)'
                        : 'rgba(99, 102, 241, 0.05)',
                      color: isDarkMode ? '#ffffff' : '#1e293b',
                    },
                  }),
                  transition: 'all 0.3s ease',
                }}
              >
                {item.name}
              </Button>
            </ListItem>
          </motion.div>
        ))}
      </List>

      {/* Theme Toggle in Drawer */}
      <Box
        sx={{
          p: 3,
          borderTop: isDarkMode 
            ? '1px solid rgba(99, 102, 241, 0.2)' 
            : '1px solid rgba(99, 102, 241, 0.15)',
        }}
      >
        <Button
          fullWidth
          onClick={toggleTheme}
          startIcon={isDarkMode ? <LightMode /> : <DarkMode />}
          sx={{
            py: 1.5,
            borderRadius: '12px',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            ...(isDarkMode ? {
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#a5b4fc',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              '&:hover': {
                background: 'rgba(139, 92, 246, 0.2)',
              },
            } : {
              background: 'rgba(99, 102, 241, 0.08)',
              color: '#6366f1',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              '&:hover': {
                background: 'rgba(99, 102, 241, 0.15)',
              },
            }),
          }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          ...(isDarkMode ? {
            background: scrolled 
              ? 'rgba(15, 23, 42, 0.8)'
              : 'rgba(10, 10, 10, 0.6)',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled 
              ? '1px solid rgba(99, 102, 241, 0.2)'
              : '1px solid transparent',
          } : {
            background: scrolled 
              ? 'rgba(255, 255, 255, 0.8)'
              : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled 
              ? '1px solid rgba(99, 102, 241, 0.15)'
              : '1px solid transparent',
          }),
          boxShadow: scrolled 
            ? isDarkMode
              ? '0 4px 24px rgba(0, 0, 0, 0.4)'
              : '0 4px 24px rgba(0, 0, 0, 0.06)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                minWidth: 'auto',
                p: 0,
                '&:hover': {
                  background: 'transparent',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  NS
                </Box>
                {!isMobile && (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Nenavath Suresh
                  </Typography>
                )}
              </Box>
            </Button>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: '14px',
                ...(isDarkMode ? {
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                } : {
                  background: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.1)',
                }),
                backdropFilter: 'blur(10px)',
              }}
            >
              <AnimatePresence mode="wait">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Button
                        component={Link}
                        to={item.path}
                        sx={{
                          position: 'relative',
                          px: 2.5,
                          py: 1,
                          minWidth: 'auto',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          fontWeight: isActive ? 600 : 500,
                          ...(isActive ? {
                            color: '#ffffff',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
                          } : {
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(30, 41, 59, 0.7)',
                            '&:hover': {
                              color: isDarkMode ? '#ffffff' : '#1e293b',
                              background: isDarkMode 
                                ? 'rgba(99, 102, 241, 0.1)' 
                                : 'rgba(99, 102, 241, 0.08)',
                            },
                          }),
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </Box>
          )}

          {/* Theme Toggle Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                ml: 2,
                width: 40,
                height: 40,
                borderRadius: '10px',
                ...(isDarkMode ? {
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#a5b4fc',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  '&:hover': {
                    background: 'rgba(139, 92, 246, 0.2)',
                    transform: 'rotate(180deg)',
                  },
                } : {
                  background: 'rgba(99, 102, 241, 0.08)',
                  color: '#6366f1',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.15)',
                    transform: 'rotate(180deg)',
                  },
                }),
                transition: 'all 0.4s ease',
              }}
            >
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </motion.div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  ml: 2,
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  ...(isDarkMode ? {
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    '&:hover': {
                      background: 'rgba(139, 92, 246, 0.2)',
                    },
                  } : {
                    background: 'rgba(99, 102, 241, 0.08)',
                    color: '#6366f1',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.15)',
                    },
                  }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
