import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Modal,
  Backdrop,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  ShoppingCart,
  Person,
  Cloud,
  Assignment,
} from '@mui/icons-material';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Nxt Trendz',
      description: 'An e-commerce web app with product listings, cart functionality, and authentication-protected routes.',
      fullDescription: 'Built an e-commerce web app with product listings, cart functionality, authentication-protected routes, and responsive light/dark theming. Features include product catalog, cart system, login/logout, protected routes, and theme toggle functionality.',
      techStack: ['React.js', 'Context API', 'React Router', 'CSS'],
      icon: <ShoppingCart />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/sureshnenavath/nxttrenz-app',
      demo: 'https://nxttrenz.dpdns.org/',
      color: '#e91e63',
    },
    {
      id: 2,
      name: 'Jobby App',
      description: 'A clean and responsive job search app with filtering and secure login using JWT tokens.',
      fullDescription: 'Developed a clean and responsive job search app with filtering and secure login using JWT tokens and cookies. Features include job listings, advanced filters, login/signup functionality, and JWT authentication for secure user sessions.',
      techStack: ['React.js', 'JWT', 'Cookies', 'CSS'],
      icon: <Assignment />,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/sureshnenavath/Jobby-App',
      demo: 'https://jobbyjobfinder.netlify.app',
      color: '#2196f3',
    },
    {
      id: 3,
      name: 'Subscribely App',
      description: 'A subscription management demo app with Django backend and React (Vite) frontend.',
      fullDescription: 'Built a subscription management demo app with Django backend and React (Vite) frontend. Features Razorpay integration, webhook event handling, JWT authentication, subscription plans, and Django Admin interface for comprehensive subscription management.',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'Django', 'Django REST Framework', 'SimpleJWT', 'Razorpay SDK'],
      icon: <Cloud />,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/sureshnenavath/Subscribely',
      demo: 'https://subscribely.netlify.app/',
      color: '#8b5cf6',
    },
    {
      id: 4,
      name: 'ResumeAI',
      description: 'An AI-powered résumé analysis web app using Google Gemini AI for skill extraction and rating.',
      fullDescription: 'Developed an AI-powered résumé analysis web app using Google Gemini AI to extract skills, rate résumés, and provide personalized suggestions. Features include Upload & History tabs, modal views, skill extraction, and resume rating with AI-powered insights.',
      techStack: ['React.js', 'TailwindCSS', 'Python (FastAPI)', 'SQLite', 'Google Gemini AI'],
      icon: <Person />,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/sureshnenavath/resumeai',
      demo: 'https://resumeaianalyser.netlify.app',
      color: '#00bcd4',
    },
    {
      id: 5,
      name: 'Task Tracker App',
      description: 'A simple and responsive task tracker app with local storage support.',
      fullDescription: 'Developed a simple and responsive task tracker app with local storage support. Features include add/delete/search tasks functionality with persistent data storage, ensuring your tasks are saved locally in your browser for continued productivity.',
      techStack: ['React.js', 'HTML', 'CSS', 'Local Storage'],
      icon: <Assignment />,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/sureshnenavath/task-tracker',
      demo: 'https://tasktrackerwebapp.netlify.app',
      color: '#ff9800',
    },
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

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
                My Projects
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Explore my portfolio of web applications and software projects
              </Typography>
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              alignItems: 'stretch',
              width: '100%',
              margin: 0,
              '& > .MuiGrid-item': {
                paddingLeft: '12px !important',
                paddingTop: '12px !important',
              }
            }}
          >
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={project.id} 
                sx={{ 
                  display: 'flex',
                  width: { xs: '100%', md: '50%' },
                  flexBasis: { xs: '100%', md: '50%' },
                  maxWidth: { xs: '100%', md: '50%' },
                }}
              >
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{ width: '100%', display: 'flex' }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      height: '480px',
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDarkMode
                        ? 'linear-gradient(145deg, #1e293b, #334155)'
                        : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                      borderRadius: 3,
                      boxShadow: isDarkMode
                        ? '0 10px 25px rgba(0, 0, 0, 0.3)'
                        : '0 10px 25px rgba(0, 0, 0, 0.1)',
                      border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: isDarkMode
                          ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                          : '0 20px 40px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                    onClick={() => handleOpenModal(project)}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '200px', flexShrink: 0 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: project.color,
                          borderRadius: '50%',
                          p: 1,
                          color: 'white',
                        }}
                      >
                        {project.icon}
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ 
                      p: 3, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '280px'
                    }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: isDarkMode ? '#e2e8f0' : '#1e293b',
                          mb: 2,
                          fontSize: '1.25rem',
                          lineHeight: 1.2,
                          height: '2.4rem',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {project.name}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDarkMode ? '#cbd5e1' : '#64748b',
                          mb: 3,
                          lineHeight: 1.4,
                          height: '5.6rem',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3, minHeight: '2.5rem' }}>
                        {project.techStack.slice(0, 2).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: `${project.color}20`,
                              color: project.color,
                              fontWeight: 'bold',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                        {project.techStack.length > 2 && (
                          <Chip
                            label={`+${project.techStack.length - 2}`}
                            size="small"
                            sx={{
                              background: isDarkMode ? '#334155' : '#e2e8f0',
                              color: isDarkMode ? '#cbd5e1' : '#64748b',
                              fontSize: '0.75rem',
                            }}
                          />
                        )}
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                        <Button
                          variant="outlined"
                          size="medium"
                          startIcon={<GitHub />}
                          href={project.github}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            borderColor: project.color,
                            color: project.color,
                            flex: 1,
                            py: 1,
                            '&:hover': {
                              borderColor: project.color,
                              background: `${project.color}10`,
                            },
                          }}
                        >
                          CODE
                        </Button>
                        <Button
                          variant="contained"
                          size="medium"
                          startIcon={<Launch />}
                          href={project.demo}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            background: project.color,
                            flex: 1,
                            py: 1,
                            '&:hover': {
                              background: project.color,
                              opacity: 0.9,
                            },
                          }}
                        >
                          DEMO
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Project Detail Modal */}
        <Modal
          open={Boolean(selectedProject)}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, sm: 3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              outline: 'none',
            }}
          >
            {selectedProject && (
              <Card
                sx={{
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  background: isDarkMode
                    ? 'linear-gradient(145deg, #1e293b, #334155)'
                    : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                  borderRadius: 3,
                  border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                  position: 'relative',
                  boxShadow: isDarkMode
                    ? '0 25px 50px rgba(0, 0, 0, 0.5)'
                    : '0 25px 50px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={selectedProject.image}
                    alt={selectedProject.name}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <IconButton
                    onClick={handleCloseModal}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      '&:hover': {
                        background: 'rgba(0, 0, 0, 0.9)',
                      },
                      zIndex: 1,
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      mb: 3,
                      fontSize: { xs: '1.75rem', sm: '2rem' },
                    }}
                  >
                    {selectedProject.name}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: isDarkMode ? '#cbd5e1' : '#64748b',
                      mb: 4,
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                    }}
                  >
                    {selectedProject.fullDescription}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      mb: 2,
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    }}
                  >
                    Technologies Used
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {selectedProject.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          background: `${selectedProject.color}20`,
                          color: selectedProject.color,
                          fontWeight: 'bold',
                          fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2 
                  }}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<GitHub />}
                      href={selectedProject.github}
                      target="_blank"
                      fullWidth
                      sx={{
                        borderColor: selectedProject.color,
                        color: selectedProject.color,
                        py: 1.5,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        '&:hover': {
                          borderColor: selectedProject.color,
                          background: `${selectedProject.color}10`,
                        },
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Launch />}
                      href={selectedProject.demo}
                      target="_blank"
                      fullWidth
                      sx={{
                        background: selectedProject.color,
                        py: 1.5,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        '&:hover': {
                          background: selectedProject.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </Modal>
      </Container>
    </Box>
  );
};

export default Projects;