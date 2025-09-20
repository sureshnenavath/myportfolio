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
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  EmojiEvents,
  Code,
  GitHub,
  Group,
  Star,
  TrendingUp,
  Build,
  CheckCircle,
} from '@mui/icons-material';

const Achievements = () => {
  const { isDarkMode } = useTheme();

  const achievements = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description: 'Built multiple full-stack applications using MERN stack',
      icon: <Build />,
      color: '#6366f1',
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
      color: '#8b5cf6',
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
      color: '#22c55e',
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
      color: '#f59e0b',
      details: [
        'Participated in online coding competitions',
        'Solved algorithmic and data structure problems',
        'Worked in team-based hackathon events',
        'Improved problem-solving and time management skills',
      ],
    },
  ];

  const skills = [
      { name: 'JavaScript', icon: '💛' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🚀' },
      { name: 'Express.js', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'Git/GitHub', icon: '📚' },
      { name: 'SQLite', icon: '🗄️' },
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
                Achievements
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Key accomplishments and milestones in my development journey
              </Typography>
            </Box>
          </motion.div>

          {/* Achievements Grid */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={6} key={achievement.id}>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: isDarkMode
                          ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                          : '0 20px 40px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            background: achievement.color,
                            mr: 2,
                            width: 60,
                            height: 60,
                          }}
                        >
                          {achievement.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              color: isDarkMode ? '#e2e8f0' : '#1e293b',
                              mb: 1,
                            }}
                          >
                            {achievement.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: isDarkMode ? '#cbd5e1' : '#64748b',
                            }}
                          >
                            {achievement.description}
                          </Typography>
                        </Box>
                      </Box>

                      <List sx={{ p: 0 }}>
                        {achievement.details.map((detail, detailIndex) => (
                          <ListItem key={detailIndex} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircle
                                sx={{
                                  color: achievement.color,
                                  fontSize: 20,
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                                  fontSize: '0.9rem',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
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
                mb: 6,
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
                  Technical Expertise
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {skills.map((skill, index) => (
                    <Grid item key={skill.name}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Chip
                          label={`${skill.icon} ${skill.name}`}
                          sx={{
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            height: 40,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #5855eb, #7c3aed)',
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          {/* Statistics */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
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
                    50+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    Projects Built
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
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
                    500+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    GitHub Commits
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
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
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
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
                    5+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      fontWeight: 600,
                    }}
                  >
                    Competitions
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

export default Achievements;