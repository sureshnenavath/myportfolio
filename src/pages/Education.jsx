import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  School,
  LibraryBooks,
  EmojiEvents,
} from '@mui/icons-material';

const Education = () => {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Siddhartha Institute of Engineering & Technology',
      location: 'Hyderabad',
      year: '2025',
      description: 'Completed B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and web technologies.',
      icon: <School />,
      color: '#6366f1',
    },
    {
      id: 2,
      degree: 'Intermediate (MPC)',
      field: 'Mathematics, Physics and Chemistry',
      institution: 'Telangana Social Welfare Residential Educational Institutions Society',
      location: 'Sangareddy, Telangana',
      year: '2021',
      description: 'Completed intermediate education in Mathematics, Physics, and Chemistry stream with excellent academic performance.',
      icon: <LibraryBooks />,
      color: '#8b5cf6',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate',
      field: 'General Education',
      institution: 'Zilla Parishad High School',
      location: 'Zaheerabad, Telangana',
      year: '2019',
      description: 'Completed SSC with strong foundation in mathematics and science subjects.',
      icon: <EmojiEvents />,
      color: '#ec4899',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: isDarkMode
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Education
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                My educational journey and academic achievements
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline */}
          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 30, md: '50%' },
                top: 0,
                bottom: 0,
                width: 4,
                background: `linear-gradient(to bottom, ${educationData.map(item => item.color).join(', ')})`,
                borderRadius: 2,
                transform: { xs: 'none', md: 'translateX(-50%)' },
              }}
            />

            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                    mb: 6,
                    position: 'relative',
                  }}
                >
                  {/* Timeline Node */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 22, md: '50%' },
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: item.color,
                      transform: { xs: 'none', md: 'translateX(-50%)' },
                      zIndex: 2,
                      border: '4px solid',
                      borderColor: isDarkMode ? '#1a1a1a' : '#f8fafc',
                    }}
                  />

                  {/* Content Card */}
                  <Box
                    sx={{
                      width: { xs: 'calc(100% - 80px)', md: 'calc(50% - 40px)' },
                      ml: { xs: 8, md: index % 2 === 0 ? 0 : 5 },
                      mr: { xs: 0, md: index % 2 === 0 ? 5 : 0 },
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        sx={{
                          background: isDarkMode
                            ? 'linear-gradient(145deg, #1e293b, #334155)'
                            : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                          borderRadius: 3,
                          boxShadow: isDarkMode
                            ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                            : '0 10px 25px rgba(0, 0, 0, 0.1)',
                          border: `2px solid ${item.color}20`,
                          position: 'relative',
                          overflow: 'visible',
                        }}
                      >
                        {/* Arrow */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 30,
                            [index % 2 === 0 ? 'left' : 'right']: { xs: -10, md: -10 },
                            width: 0,
                            height: 0,
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            [index % 2 === 0 ? 'borderRight' : 'borderLeft']: {
                              xs: `10px solid ${isDarkMode ? '#334155' : '#ffffff'}`,
                              md: `10px solid ${isDarkMode ? '#334155' : '#ffffff'}`
                            },
                            display: { xs: 'none', md: 'block' },
                          }}
                        />

                        <CardContent sx={{ p: 4 }}>
                          {/* Header */}
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                              sx={{
                                background: item.color,
                                mr: 2,
                                width: 56,
                                height: 56,
                              }}
                            >
                              {item.icon}
                            </Avatar>
                            <Box sx={{ flex: 1 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 600,
                                  color: isDarkMode ? '#e2e8f0' : '#1e293b',
                                  mb: 1,
                                }}
                              >
                                {item.degree}
                              </Typography>
                              <Chip
                                label={item.year}
                                sx={{
                                  background: item.color,
                                  color: 'white',
                                  fontWeight: 'bold',
                                }}
                              />
                            </Box>
                          </Box>

                          {/* Content */}
                          <Typography
                            variant="h6"
                            sx={{
                              color: item.color,
                              fontWeight: 600,
                              mb: 1,
                            }}
                          >
                            {item.field}
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: isDarkMode ? '#cbd5e1' : '#64748b',
                              fontWeight: 500,
                              mb: 1,
                            }}
                          >
                            {item.institution}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: isDarkMode ? '#94a3b8' : '#64748b',
                              mb: 2,
                            }}
                          >
                            📍 {item.location}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              color: isDarkMode ? '#cbd5e1' : '#64748b',
                              lineHeight: 1.6,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Additional Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Card
                sx={{
                  background: isDarkMode
                    ? 'linear-gradient(145deg, #1e293b, #334155)'
                    : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                  borderRadius: 3,
                  boxShadow: isDarkMode
                    ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                    : '0 10px 25px rgba(0, 0, 0, 0.1)',
                  border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  p: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                  }}
                >
                  Academic Excellence
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                    lineHeight: 1.6,
                  }}
                >
                  Throughout my educational journey, I have maintained a strong academic record 
                  while actively participating in various technical projects and programming competitions. 
                  My education has provided me with a solid foundation in computer science principles 
                  and practical software development skills.
                </Typography>
              </Card>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;