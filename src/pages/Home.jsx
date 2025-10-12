import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import {
  KeyboardArrowDown,
  GitHub,
  LinkedIn,
  Email,
  Download,
  Code,
  Rocket,
  EmojiEvents,
} from '@mui/icons-material';
import DotGrid from '../style/DotGrid.jsx';

const Home = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    'Software Developer',
    'Full Stack Developer',
    'React.js Specialist',
    'Problem Solver'
  ];

  const stats = [
    { icon: <Code />, number: '50+', label: 'Projects Built' },
    { icon: <Rocket />, number: '10+', label: 'Technologies' },
    { icon: <EmojiEvents />, number: '100%', label: 'Dedication' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        ...(isDarkMode ? {
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)',
        } : {
          background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        }),
      }}
    >
      {/* Background Effects */}
      {isDarkMode ? (
        <>
          {/* DotGrid for dark mode */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              opacity: 0.4,
            }}
          >
            <DotGrid />
          </Box>

          {/* Animated gradient orbs for dark mode */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              top: '10%',
              right: '15%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />
        </>
      ) : (
        <>
          {/* Floating shapes for light mode */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '20%',
              width: '300px',
              height: '300px',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              zIndex: 0,
            }}
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '15%',
              width: '250px',
              height: '250px',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              zIndex: 0,
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: '60%',
              right: '10%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)',
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: '1400px',
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ flex: 1 }}
          >
            <Box sx={{ maxWidth: { xs: '100%', md: '600px' } }}>
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Chip
                  label="Welcome to my portfolio"
                  sx={{
                    mb: 3,
                    px: 2,
                    py: 2.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    ...(isDarkMode ? {
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#a5b4fc',
                      backdropFilter: 'blur(10px)',
                    } : {
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      color: '#6366f1',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
                    }),
                  }}
                />
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 2,
                    ...(isDarkMode ? {
                      background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 80px rgba(99, 102, 241, 0.5)',
                    } : {
                      background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }),
                  }}
                >
                  Hello, I'm
                  <br />
                  <Box
                    component="span"
                    sx={{
                      ...(isDarkMode ? {
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                      } : {
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      }),
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Nenavath Suresh
                  </Box>
                </Typography>
              </motion.div>

              {/* Animated Role Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Box sx={{ height: '80px', display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentText}
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                          fontWeight: 700,
                          ...(isDarkMode ? {
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          } : {
                            color: '#6366f1',
                          }),
                        }}
                      >
                        {texts[currentText]}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.8,
                    mb: 4,
                    ...(isDarkMode ? {
                      color: 'rgba(255, 255, 255, 0.7)',
                    } : {
                      color: 'rgba(30, 41, 59, 0.8)',
                    }),
                  }}
                >
                  Passionate about creating exceptional digital experiences through clean code and innovative solutions. 
                  Specialized in React.js and modern web technologies, I transform ideas into reality.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Email />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      textTransform: 'none',
                      ...(isDarkMode ? {
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                          boxShadow: '0 12px 32px rgba(139, 92, 246, 0.5)',
                          transform: 'translateY(-2px)',
                        },
                      } : {
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                          boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
                          transform: 'translateY(-2px)',
                        },
                      }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '12px',
                      textTransform: 'none',
                      ...(isDarkMode ? {
                        borderColor: 'rgba(139, 92, 246, 0.5)',
                        color: '#a5b4fc',
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(139, 92, 246, 0.1)',
                        '&:hover': {
                          borderColor: '#8b5cf6',
                          background: 'rgba(139, 92, 246, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
                        },
                      } : {
                        borderColor: '#6366f1',
                        color: '#6366f1',
                        background: 'rgba(99, 102, 241, 0.05)',
                        '&:hover': {
                          borderColor: '#4f46e5',
                          background: 'rgba(99, 102, 241, 0.1)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(99, 102, 241, 0.2)',
                        },
                      }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      ...(isDarkMode ? {
                        color: 'rgba(255, 255, 255, 0.5)',
                      } : {
                        color: 'rgba(30, 41, 59, 0.6)',
                      }),
                    }}
                  >
                    Connect with me:
                  </Typography>
                  <IconButton
                    component="a"
                    href="https://github.com/sureshnenavath"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      ...(isDarkMode ? {
                        color: '#a5b4fc',
                        background: 'rgba(99, 102, 241, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)',
                        },
                      } : {
                        color: '#6366f1',
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.15)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)',
                        },
                      }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/nenavath-suresh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      ...(isDarkMode ? {
                        color: '#a5b4fc',
                        background: 'rgba(99, 102, 241, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)',
                        },
                      } : {
                        color: '#6366f1',
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        '&:hover': {
                          background: 'rgba(99, 102, 241, 0.15)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)',
                        },
                      }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>
              </motion.div>
            </Box>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '280px', sm: '350px', md: '450px' },
                height: { xs: '280px', sm: '350px', md: '450px' },
              }}
            >
              {/* Animated Background Rings */}
              {isDarkMode ? (
                <>
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
                      opacity: 0.3,
                      filter: 'blur(20px)',
                    }}
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      inset: '-10px',
                      borderRadius: '50%',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(135deg, #6366f1, #ec4899)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  />
                </>
              ) : (
                <>
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',
                      inset: '-30px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
                      opacity: 0.2,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: '-15px',
                      borderRadius: '50%',
                      boxShadow: '0 0 60px rgba(99, 102, 241, 0.3)',
                    }}
                  />
                </>
              )}

              {/* Profile Image Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  ...(isDarkMode ? {
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '3px solid rgba(139, 92, 246, 0.3)',
                    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(139, 92, 246, 0.1)',
                  } : {
                    background: 'white',
                    border: '3px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.25)',
                  }),
                }}
              >
                <img
                  src="https://res.cloudinary.com/dd6nthams/image/upload/v1690816190/image-suresh-profile.jpg"
                  alt="Nenavath Suresh"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </motion.div>

              {/* Stats Cards Around Profile */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    ...(index === 0 && { top: '-10px', right: '-20px' }),
                    ...(index === 1 && { bottom: '30%', left: '-30px' }),
                    ...(index === 2 && { bottom: '-10px', right: '-20px' }),
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 0.5,
                      minWidth: '100px',
                      ...(isDarkMode ? {
                        background: 'rgba(15, 23, 42, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                      } : {
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.2)',
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        color: isDarkMode ? '#a5b4fc' : '#6366f1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        ...(isDarkMode ? {
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        } : {
                          color: '#6366f1',
                        }),
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: 'center',
                        fontSize: '0.7rem',
                        ...(isDarkMode ? {
                          color: 'rgba(255, 255, 255, 0.6)',
                        } : {
                          color: 'rgba(30, 41, 59, 0.7)',
                        }),
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconButton
            sx={{
              ...(isDarkMode ? {
                color: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  color: '#a5b4fc',
                  background: 'rgba(99, 102, 241, 0.1)',
                },
              } : {
                color: 'rgba(30, 41, 59, 0.5)',
                '&:hover': {
                  color: '#6366f1',
                  background: 'rgba(99, 102, 241, 0.1)',
                },
              }),
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;
