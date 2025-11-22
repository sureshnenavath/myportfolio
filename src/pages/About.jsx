
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Avatar, Chip } from '@mui/material';
import { Code, Web, Storage, CloudQueue, BugReport, Speed, EmojiEvents, School, Work } from '@mui/icons-material';
import Spotlight from '../components/Spotlight';

const About = () => {
  const skills = [
    { name: 'React.js', icon: <Code />, category: 'Frontend' },
    { name: 'JavaScript', icon: <Code />, category: 'Frontend' },
    { name: 'Python', icon: <Code />, category: 'Backend' },
    { name: 'HTML/CSS', icon: <Web />, category: 'Frontend' },
    { name: 'Node.js', icon: <Speed />, category: 'Backend' },
    { name: 'SQLite', icon: <Storage />, category: 'Database' },
    { name: 'Express.js', icon: <Speed />, category: 'Backend' },
    { name: 'REST APIs', icon: <CloudQueue />, category: 'Backend' },
  ];

  const stats = [
    { number: '5+', label: 'Projects' },
    { number: '10+', label: 'Technologies' },
    { number: '1+', label: 'Years Exp.' },
  ];

  return (
    <Spotlight className="min-h-screen flex items-center justify-center pb-20 pt-24">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ position: 'relative', mb: 6, display: 'inline-block' }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: -20,
                  background: 'var(--gradient-glow)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />
              <Avatar
                src="https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg"
                sx={{
                  width: { xs: 150, md: 200 },
                  height: { xs: 150, md: 200 },
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  position: 'relative',
                  zIndex: 1,
                  mx: 'auto',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                mb: 3,
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'var(--text-secondary)',
                fontWeight: 300,
                lineHeight: 1.8,
                mb: 6,
                mx: 'auto',
              }}
            >
              Passionate software developer from Hyderabad with expertise in modern web technologies.
              I love creating innovative solutions and continuously learning new technologies to
              build amazing user experiences.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 8 }, mb: 8 }}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-display)',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              Technical Arsenal
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.05)',
                          borderColor: 'var(--primary)',
                        },
                      }}
                    >
                      <Box sx={{ color: 'var(--primary)' }}>
                        {skill.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>
                          {skill.category}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Spotlight>
  );
};

export default About;