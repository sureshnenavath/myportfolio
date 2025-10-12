import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import {
  EmojiEvents,
  GitHub,
  TrendingUp,
  Build,
  CheckCircle,
  WorkspacePremium,
  Verified,
} from '@mui/icons-material';

const Achievements = () => {
  const { isDarkMode } = useTheme();

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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
              <EmojiEvents
                sx={{
                  fontSize: 48,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Achievements
              </Typography>
            </Box>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Key accomplishments and milestones in my development journey
            </Typography>
          </motion.div>
        </Box>

        {/* Achievements Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {achievements.map((achievement, idx) => (
            <Grid item xs={12} md={6} key={achievement.id}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring', stiffness: 120 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
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
                    overflow: 'hidden',
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
                      background: achievement.gradient,
                      borderRadius: '12px 12px 0 0',
                    }}
                  />

                  {/* Header with icon */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: achievement.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                        boxShadow: '0 8px 24px rgba(139,92,246,0.3)',
                      }}
                    >
                      {achievement.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          background: achievement.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {achievement.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {achievement.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Details list */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {achievement.details.map((detail, detailIdx) => (
                      <motion.div
                        key={detailIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 + 0.3 + (0.1 * detailIdx) }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.5,
                            p: 1.5,
                            borderRadius: 2,
                            background: isDarkMode
                              ? 'rgba(99,102,241,0.05)'
                              : 'rgba(99,102,241,0.03)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: isDarkMode
                                ? 'rgba(99,102,241,0.1)'
                                : 'rgba(99,102,241,0.08)',
                              transform: 'translateX(8px)',
                            },
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 20,
                              color: '#10b981',
                              flexShrink: 0,
                              mt: 0.2,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              flex: 1,
                              lineHeight: 1.6,
                            }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
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
              mb: 6,
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

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, justifyContent: 'center' }}>
              <Verified
                sx={{
                  fontSize: 32,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Technical Expertise
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
              }}
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (0.05 * idx), type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Chip
                    label={`${skill.icon} ${skill.name}`}
                    sx={{
                      background: skill.gradient,
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      height: 44,
                      px: 2,
                      boxShadow: '0 4px 12px rgba(139,92,246,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(139,92,246,0.4)',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Statistics Cards */}
        <Grid container spacing={3}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (idx * 0.1), type: 'spring', stiffness: 120 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -8, scale: 1.05 }}
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
                    overflow: 'hidden',
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

                  {/* Animated background circle */}
                  <Box
                    component={motion.div}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      background: stat.gradient,
                      filter: 'blur(30px)',
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
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
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Achievements;