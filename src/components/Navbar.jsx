import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Tooltip } from '@mui/material';
import {
  Home,
  Person,
  Work,
  Code,
  School,
  EmojiEvents,
  Email,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home /> },
    { name: 'About', path: '/about', icon: <Person /> },
    { name: 'Experience', path: '/experience', icon: <Work /> },
    { name: 'Projects', path: '/projects', icon: <Code /> },
    { name: 'Education', path: '/education', icon: <School /> },
    { name: 'Achievements', path: '/achievements', icon: <EmojiEvents /> },
    { name: 'Contact', path: '/contact', icon: <Email /> },
  ];

  return (
    <Box
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        className="glass-card"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          p: 1.5,
          px: 3,
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: isDarkMode ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Tooltip key={item.name} title={item.name} arrow placement="bottom">
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    background: isActive
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'transparent',
                    color: isActive ? '#fff' : (isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'),
                    transition: 'all 0.3s ease',
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: 20, mr: 0.5 } })}
                  <Box component="span" sx={{ fontSize: '0.9rem', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                    {item.name}
                  </Box>
                </motion.div>
              </Link>
            </Tooltip>
          );
        })}

        <Box sx={{ width: '1px', height: '20px', background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', mx: 1 }} />

        <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"} arrow placement="bottom">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: '50%',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
            }}
          >
            {isDarkMode ? <Brightness7 sx={{ fontSize: 20 }} /> : <Brightness4 sx={{ fontSize: 20 }} />}
          </motion.div>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Navbar;
