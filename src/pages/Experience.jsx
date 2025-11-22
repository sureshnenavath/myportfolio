import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Work, School, Code } from '@mui/icons-material';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Vedlogy Learnings',
      date: 'September 2024 — Present',
      description: 'Building modern web applications with cutting-edge technologies and contributing to real-world projects.',
      logo: 'src\\assets\\vedlogy_logo.png',
      type: 'work',
      skills: [
        'React',
        'Django',
        'Django REST Framework',
        'SQLite',
        'JWT Authentication',
        'Google OAuth',
        'LangChain',
        'Generative AI Integration',
        'RESTful API',
        'Cryptography'
      ],
    },
    // Add more experiences here as needed
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <Work />;
      case 'education':
        return <School />;
      default:
        return <Code />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 2, md: 4 }, pb: { xs: 4, md: 8 }, pt: { xs: 2, md: 4 } }}>
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
                background: 'var(--gradient-main)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-display)',
              }}
            >
              My Journey
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-secondary)', maxWidth: 600, mx: 'auto' }}>
              Explore my professional experience and the skills I've developed along the way
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative', mt: 6 }}>
          {/* Gradient timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 24, md: '50%' },
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, rgba(139,92,246,0.2) 100%)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              borderRadius: 2,
            }}
          />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, x: isLeft ? -40 : 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2, type: 'spring', stiffness: 120 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  mb: 8,
                  flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
                  textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
                }}
              >
                {/* Content Card */}
                <Box
                  sx={{
                    width: { xs: 'calc(100% - 60px)', md: 'calc(50% - 40px)' },
                    ml: { xs: 7, md: 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        position: 'relative',
                        borderRadius: '24px',
                        p: 3,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          borderColor: 'var(--primary)',
                          boxShadow: '0 25px 70px rgba(99, 102, 241, 0.2)',
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
                          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                          borderRadius: '24px 24px 0 0',
                        }}
                      />

                      <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center', flexDirection: { xs: 'row', md: isLeft ? 'row-reverse' : 'row' } }}>
                        <Avatar
                          src={exp.logo}
                          alt={exp.company}
                          sx={{
                            width: 64,
                            height: 64,
                            border: '3px solid rgba(139,92,246,0.3)',
                            boxShadow: '0 8px 24px rgba(139,92,246,0.2)',
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontFamily: 'var(--font-display)' }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ color: 'var(--primary)', fontWeight: 600 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--text-secondary)',
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        📅 {exp.date}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                        {exp.description}
                      </Typography>

                      {/* Skills/Tech Stack */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' } }}>
                        {exp.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              background: 'rgba(99, 102, 241, 0.1)',
                              color: 'var(--accent)',
                              fontWeight: 600,
                              border: '1px solid rgba(99, 102, 241, 0.2)',
                              '&:hover': {
                                background: 'rgba(99, 102, 241, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Box>

                {/* Animated Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 24, md: '50%' },
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        border: '4px solid #030014',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 8px 32px rgba(139,92,246,0.4), 0 0 0 0 rgba(139,92,246,0.4)',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        '@keyframes pulse': {
                          '0%, 100%': {
                            boxShadow: '0 8px 32px rgba(139,92,246,0.4), 0 0 0 0 rgba(139,92,246,0.4)',
                          },
                          '50%': {
                            boxShadow: '0 8px 32px rgba(139,92,246,0.6), 0 0 0 20px rgba(139,92,246,0)',
                          },
                        },
                      }}
                    >
                      {getIcon(exp.type)}
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Experience;
