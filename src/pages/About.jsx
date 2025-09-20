import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  BugReport,
  Speed,
} from '@mui/icons-material';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'React.js', level: 90, icon: <Code />, color: '#61dafb' },
    { name: 'JavaScript', level: 85, icon: <Code />, color: '#f7df1e' },
    { name: 'Python', level: 90, icon: <Code />, color: '#7081a0ff' },
    { name: 'HTML/CSS', level: 95, icon: <Web />, color: '#e34f26' },
    { name: 'Bootstrap', level: 80, icon: <Web />, color: '#7952b3' },
    { name: 'Git & GitHub', level: 70, icon: <BugReport />, color: '#f05032' },
    { name: 'Node.js', level: 75, icon: <Speed />, color: '#339933' },
    { name: 'SQLite', level: 80, icon: <Storage />, color: '#47a248' },
    { name: 'Express.js', level: 75, icon: <Speed />, color: '#000000' },
    { name: 'REST APIs', level: 85, icon: <CloudQueue />, color: '#ff6b6b' },
    { name: 'Java', level: 60, icon: <Code />, color: '#1a0e10ff' }
  ];

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
                About Me
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Get to know more about my background, skills, and passion for development
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Bio Section */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: isDarkMode
                      ? 'linear-gradient(145deg, #1e293b, #334155)'
                      : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                    borderRadius: 3,
                    boxShadow: isDarkMode
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Avatar
                      src="https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg"
                      sx={{
                        width: 150,
                        height: 150,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid transparent',
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        padding: '4px',
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? '#e2e8f0' : '#1e293b',
                        mb: 2,
                      }}
                    >
                      Nenavath Suresh
                    </Typography>
                    <Chip
                      label="Software Developer"
                      sx={{
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 3,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: isDarkMode ? '#cbd5e1' : '#64748b',
                        lineHeight: 1.6,
                      }}
                    >
                      Passionate software developer from Hyderabad with expertise in modern web technologies. 
                      I love creating innovative solutions and continuously learning new technologies to 
                      build amazing user experiences.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Skills Section */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: isDarkMode
                      ? 'linear-gradient(145deg, #1e293b, #334155)'
                      : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                    borderRadius: 3,
                    boxShadow: isDarkMode
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        color: isDarkMode ? '#e2e8f0' : '#1e293b',
                        mb: 4,
                        textAlign: 'center',
                      }}
                    >
                      Technical Skills
                    </Typography>
                    <Grid container spacing={3}>
                      {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} key={skill.name}>
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Box sx={{ mb: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Box
                                  sx={{
                                    color: skill.color,
                                    mr: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {skill.icon}
                                </Box>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontWeight: 500,
                                    color: isDarkMode ? '#e2e8f0' : '#1e293b',
                                    flex: 1,
                                  }}
                                >
                                  {skill.name}
                                </Typography>
                                {/*<Typography
                                  variant="body2"
                                  sx={{
                                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                                    fontWeight: 600,
                                  }}
                                >
                                  {skill.level}%
                                </Typography>*/}
                              </Box>
                              <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: isDarkMode ? '#334155' : '#e2e8f0',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 4,
                                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                                  },
                                }}
                              />
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Additional Info */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    background: isDarkMode
                      ? 'linear-gradient(145deg, #1e293b, #334155)'
                      : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                    borderRadius: 3,
                    boxShadow: isDarkMode
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #7e80f4ff, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    5+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    Projects Completed
                  </Typography>
                </Card>
              </Grid>
              {/*
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    background: isDarkMode
                      ? 'linear-gradient(145deg, #1e293b, #334155)'
                      : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                    borderRadius: 3,
                    boxShadow: isDarkMode
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    2+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    Years Experience
                  </Typography>
                </Card>
              </Grid>
               */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    background: isDarkMode
                      ? 'linear-gradient(145deg, #1e293b, #334155)'
                      : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                    borderRadius: 3,
                    boxShadow: isDarkMode
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px rgba(0, 0, 0, 0.1)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    10+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    Technologies
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;