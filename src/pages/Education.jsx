import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Avatar,
  Chip,
} from '@mui/material';
import {
  School,
  LibraryBooks,
  EmojiEvents,
} from '@mui/icons-material';
import collegeLogo from '../assets/b.tech_college_logo.jpeg';
import interLogo from '../assets/ttwreis_inter_college_logo.png';
import sscLogo from '../assets/ssc_school_logo.png';

const Education = () => {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      logo: collegeLogo,
      institution: 'Siddhartha Institute of Engineering & Technology',
      location: 'Hyderabad',
      year: '2025',
      description: 'Completed B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and web technologies.',
      icon: <School />,
      skills: ['DSA', 'Web Development', 'Software Engineering', 'Database'],
    },
    {
      id: 2,
      degree: 'Intermediate (MPC)',
      logo: interLogo,
      field: 'Mathematics, Physics and Chemistry',
      institution: 'Telangana Social Welfare Residential Educational Institutions Society',
      location: 'Sangareddy, Telangana',
      year: '2021',
      description: 'Completed intermediate education in Mathematics, Physics, and Chemistry stream with excellent academic performance.',
      icon: <LibraryBooks />,
      skills: ['Mathematics', 'Physics', 'Chemistry'],
    },
    {
      id: 3,
      degree: 'Secondary School Certificate',
      logo: sscLogo,
      field: 'General Education',
      institution: 'Zilla Parishad High School',
      location: 'Zaheerabad, Telangana',
      year: '2019',
      description: 'Completed SSC with strong foundation in mathematics and science subjects.',
      icon: <EmojiEvents />,
      skills: ['Mathematics', 'Science', 'English'],
    },
  ];

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
              Education
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-secondary)', maxWidth: 600, mx: 'auto' }}>
              My educational journey and academic achievements
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
              background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, rgba(236,72,153,0.2) 100%)',
              transform: { xs: 'none', md: 'translateX(-50%)' },
              borderRadius: 2,
            }}
          />

          {educationData.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Box
                key={edu.id}
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
                          src={edu.logo}
                          alt={edu.institution}
                          sx={{
                            width: 64,
                            height: 64,
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            border: '3px solid rgba(139,92,246,0.3)',
                            boxShadow: '0 8px 24px rgba(139,92,246,0.2)',
                          }}
                        >
                          {edu.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontFamily: 'var(--font-display)' }}>
                            {edu.degree}
                          </Typography>
                          <Chip
                            label={edu.year}
                            size="small"
                            sx={{
                              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {edu.field}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {edu.institution}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--text-secondary)',
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        📍 {edu.location}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: 'var(--text-primary)' }}>
                        {edu.description}
                      </Typography>

                      {/* Skills/Subjects */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' } }}>
                        {edu.skills.map((skill, i) => (
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
                      {edu.icon}
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box
              className="glass-card"
              sx={{
                position: 'relative',
                borderRadius: '24px',
                p: 4,
                maxWidth: 700,
                mx: 'auto',
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
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'var(--gradient-main)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 2,
                  fontFamily: 'var(--font-display)',
                }}
              >
                Academic Excellence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                Throughout my educational journey, I have maintained a strong academic record
                while actively participating in various technical projects and programming competitions.
                My education has provided me with a solid foundation in computer science principles
                and practical software development skills.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Education;