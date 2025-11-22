import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import { EmojiEvents, GitHub, TrendingUp, Build, CheckCircle, WorkspacePremium, Verified } from '@mui/icons-material';
import Spotlight from '../components/Spotlight';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description: 'Built multiple full-stack applications using MERN stack',
      icon: <Build />,
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      details: [
        'Developed 5+ complete web applications',
        'Implemented user authentication systems',
        'Created responsive and modern UI designs',
        'Integrated payment gateways and APIs',
      ],
    },
    {
      id: 2,
      title: 'Freelance Projects',
      description: 'Completed several freelance projects successfully',
      icon: <TrendingUp />,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      details: [
        'Delivered projects on time and within budget',
        'Maintained long-term client relationships',
        'Provided ongoing support and maintenance',
        'Received excellent client feedback and ratings',
      ],
    },
    {
      id: 3,
      title: 'GitHub Contributor',
      description: 'Active contributor on GitHub with consistent commits',
      icon: <GitHub />,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      details: [
        'Maintained consistent coding activity',
        'Contributed to open-source projects',
        'Shared reusable code components',
        'Documented projects with detailed README files',
      ],
    },
    {
      id: 4,
      title: 'Coding Competitions',
      description: 'Participated in coding contests and hackathons',
      icon: <EmojiEvents />,
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      details: [
        'Participated in online coding competitions',
        'Solved algorithmic and data structure problems',
        'Worked in team-based hackathon events',
        'Improved problem-solving and time management skills',
      ],
    },
  ];

  const skills = [
    { name: 'JavaScript', icon: '💛', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { name: 'React.js', icon: '⚛️', gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
    { name: 'Node.js', icon: '🚀', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { name: 'Express.js', icon: '⚡', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
    { name: 'Python', icon: '🐍', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    { name: 'HTML/CSS', icon: '🎨', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' },
    { name: 'Git/GitHub', icon: '📚', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
    { name: 'SQLite', icon: '🗄️', gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)' },
  ];

  const stats = [
    {
      number: '50+',
      label: 'Projects Built',
      icon: <Build sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    {
      number: '500+',
      label: 'GitHub Commits',
      icon: <GitHub sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
      number: '10+',
      label: 'Technologies',
      icon: <WorkspacePremium sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #ec4899, #ef4444)',
    },
    {
      number: '5+',
      label: 'Competitions',
      icon: <EmojiEvents sx={{ fontSize: 32 }} />,
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
  ];

  return (
    <Spotlight className="min-h-screen flex items-center justify-center pb-20 pt-24">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              Achievements
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'var(--text-secondary)',
                fontWeight: 300,
                lineHeight: 1.8,
                mb: 8,
                mx: 'auto',
                maxWidth: '800px',
              }}
            >
              Key accomplishments and milestones in my development journey, from building complex applications to contributing to open source.
            </Typography>

            {/* Stats Row */}
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
              {stats.map((stat, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.05)',
                          borderColor: 'var(--primary)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: 'white',
                          background: stat.gradient,
                          p: 1.5,
                          borderRadius: '12px',
                          mb: 1,
                          display: 'flex',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Achievements Grid */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 6,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              Major Milestones
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
              {achievements.map((achievement, idx) => (
                <Grid item xs={12} md={6} key={achievement.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        p: 4,
                        height: '100%',
                        borderRadius: '24px',
                        textAlign: 'left',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor: 'var(--primary)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: achievement.gradient,
                        }}
                      />

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: '12px',
                            background: achievement.gradient,
                            color: 'white',
                            display: 'flex',
                          }}
                        >
                          {achievement.icon}
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                          {achievement.title}
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 3 }}>
                        {achievement.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {achievement.details.map((detail, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <CheckCircle sx={{ fontSize: 18, color: 'var(--primary)', opacity: 0.8 }} />
                            <Typography variant="body2" sx={{ color: 'var(--text-primary)' }}>
                              {detail}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Skills Chips */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 6,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              Technologies
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    label={`${skill.icon} ${skill.name}`}
                    sx={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      height: 40,
                      px: 1,
                      '&:hover': {
                        background: 'rgba(255,255,255,0.08)',
                        borderColor: 'var(--primary)',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>

          </motion.div>
        </Box>
      </Container>
    </Spotlight>
  );
};

export default Achievements;