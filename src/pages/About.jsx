import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  BugReport,
  Speed,
  EmojiEvents,
  School,
  Work,
} from '@mui/icons-material';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'React.js', level: 90, icon: <Code />, color: '#61dafb', category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: <Code />, color: '#f7df1e', category: 'Frontend' },
    { name: 'Python', level: 90, icon: <Code />, color: '#3776ab', category: 'Backend' },
    { name: 'HTML/CSS', level: 95, icon: <Web />, color: '#e34f26', category: 'Frontend' },
    { name: 'Bootstrap', level: 80, icon: <Web />, color: '#7952b3', category: 'Frontend' },
    { name: 'Git & GitHub', level: 70, icon: <BugReport />, color: '#f05032', category: 'Tools' },
    { name: 'Node.js', level: 75, icon: <Speed />, color: '#339933', category: 'Backend' },
    { name: 'SQLite', level: 80, icon: <Storage />, color: '#47a248', category: 'Database' },
    { name: 'Express.js', level: 75, icon: <Speed />, color: '#000000', category: 'Backend' },
    { name: 'REST APIs', level: 85, icon: <CloudQueue />, color: '#ff6b6b', category: 'Backend' },
    { name: 'Java', level: 60, icon: <Code />, color: '#007396', category: 'Backend' }
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: <EmojiEvents />, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { number: '10+', label: 'Technologies', icon: <Code />, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { number: '1+', label: 'Years Learning', icon: <School />, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  ];


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 }, py: { xs: 4, md: 8 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Me
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Get to know more about my background, skills, and passion for development
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isDarkMode ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.15)'}`,
                  borderRadius: 3,
                  p: 4,
                  boxShadow: isDarkMode
                    ? '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.1)'
                    : '0 20px 60px rgba(139,92,246,0.15), 0 10px 30px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                }}
              >
                {/* Gradient accent bar */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                    borderRadius: '12px 12px 0 0',
                  }}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <Avatar
                    src="https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg"
                    sx={{
                      width: 160,
                      height: 160,
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid',
                      borderColor: isDarkMode ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)',
                      boxShadow: '0 12px 40px rgba(139,92,246,0.3)',
                    }}
                  />
                </motion.div>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Nenavath Suresh
                </Typography>

                <Chip
                  icon={<Work />}
                  label="Software Developer"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: 'white',
                    fontWeight: 700,
                    px: 2,
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Passionate software developer from Hyderabad with expertise in modern web technologies. 
                  I love creating innovative solutions and continuously learning new technologies to 
                  build amazing user experiences.
                </Typography>

                {/* Stats */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      5+
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Projects
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      10+
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Skills
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isDarkMode ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.15)'}`,
                  borderRadius: 3,
                  p: 4,
                  boxShadow: isDarkMode
                    ? '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.1)'
                    : '0 20px 60px rgba(139,92,246,0.15), 0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                {/* Gradient accent bar */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                    borderRadius: '12px 12px 0 0',
                  }}
                />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Technical Skills
                </Typography>

                <Grid container spacing={2}>
                  {skills.map((skill, idx) => (
                    <Grid item xs={12} sm={6} key={skill.name}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.05, x: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          sx={{
                            position: 'relative',
                            background: isDarkMode
                              ? 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))'
                              : 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))',
                            border: `1px solid ${isDarkMode ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.15)'}`,
                            borderRadius: 2,
                            p: 2,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            '&:hover': {
                              borderColor: isDarkMode ? 'rgba(139,92,246,0.5)' : 'rgba(139,92,246,0.3)',
                            },
                          }}
                        >
                          {/* Progress bar background */}
                          <Box
                            sx={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color}15, ${skill.color}08)`,
                              transition: 'width 1s ease',
                            }}
                          />

                          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: `${skill.color}20`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: skill.color,
                                flexShrink: 0,
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {skill.name}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {skill.category}
                              </Typography>
                            </Box>
                            <Chip
                              label={`${skill.level}%`}
                              size="small"
                              sx={{
                                background: `${skill.color}`,
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.7rem',
                              }}
                            />
                          </Box>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    background: isDarkMode
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${isDarkMode ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.15)'}`,
                    borderRadius: 3,
                    p: 4,
                    boxShadow: isDarkMode
                      ? '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.1)'
                      : '0 20px 60px rgba(139,92,246,0.15), 0 10px 30px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: isDarkMode ? 'rgba(139,92,246,0.5)' : 'rgba(139,92,246,0.3)',
                    },
                  }}
                >
                  {/* Gradient accent bar */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: stat.gradient,
                      borderRadius: '12px 12px 0 0',
                    }}
                  />

                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: stat.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mx: 'auto',
                      mb: 2,
                      boxShadow: '0 8px 24px rgba(139,92,246,0.3)',
                    }}
                  >
                    {stat.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;