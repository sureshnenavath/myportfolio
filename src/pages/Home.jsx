import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import {
  KeyboardArrowDown,
  GitHub,
  LinkedIn,
  Email,
  Download,
} from '@mui/icons-material';
import DotGrid from '../style/DotGrid.jsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Software Developer',
    'Frontend Enthusiast',
    'React.js Specialist',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [-20, 20],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isDarkMode
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d1b69 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Background Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {isDarkMode ? (
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        ) : (
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                borderRadius: '50%',
                background: `linear-gradient(45deg, 
                  ${isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.1)'}, 
                  ${isDarkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255, 255, 255, 0.05)'})`,
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))
        )}
      </Box>

      {/* Foreground Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Left Column */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: isDarkMode ? '#e2e8f0' : '#ffffff',
                    mb: 2,
                    fontWeight: 300,
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #ababb3ff, #7f0f61b2, #97818cff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                  }}
                >
                  Nenavath Suresh
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: isDarkMode ? '#e2e8f0' : '#ffffff',
                    mb: 3,
                    minHeight: '3rem',
                  }}
                >
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {texts[textIndex]}
                  </motion.span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: isDarkMode ? '#cbd5e1' : '#f1f5f9',
                    mb: 4,
                    maxWidth: 600,
                    lineHeight: 1.6,
                  }}
                >
                  Passionate about creating amazing web experiences with modern technologies.
                  I love turning ideas into beautiful, functional applications.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Email />}
                    sx={{
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5855eb, #7c3aed)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                    }}
                    href="mailto:sureshnenavath09@gmail.com"
                  >
                    Contact Me
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    href="https://drive.google.com/file/d/16rCE330gJcew8CQeQsDGCQ7WjD1KHZWu/view?usp=sharing"
                    download
                    sx={{
                      borderColor: '#6366f1',
                      color: '#6366f1',
                      '&:hover': {
                        borderColor: '#8b5cf6',
                        color: '#8b5cf6',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <IconButton
                    href="https://github.com/sureshnenavath"
                    target="_blank"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#ffffff',
                      '&:hover': {
                        color: '#6366f1',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/nenavath-suresh/"
                    target="_blank"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#ffffff',
                      '&:hover': {
                        color: '#6366f1',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Box>
              </motion.div>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <motion.div
                animate={floatingAnimation}
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 350,
                  height: 350,
                  border: '4px solid transparent',
                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                  padding: 4,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: isDarkMode ? '#1a1a1a' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dd6nthams/image/upload/v1690816190/image-suresh-profile.jpg"
                    alt="Nenavath Suresh"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <IconButton
            sx={{
              color: isDarkMode ? '#e2e8f0' : '#ffffff',
              fontSize: '2rem',
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
