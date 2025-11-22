import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
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
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
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
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 }, pb: { xs: 4, md: 8 }, pt: { xs: 2, md: 4 } }}>
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
              My Projects
            </Typography>
            <Typography variant="h6" sx={{ color: 'var(--text-secondary)', maxWidth: 600, mx: 'auto' }}>
              Explore my portfolio of web applications and software projects
            </Typography>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring', stiffness: 120 }}
            >
              <Box
                onClick={() => handleOpenModal(project)}
                component={motion.div}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card"
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: 480,
                  cursor: 'pointer',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'var(--primary)',
                    boxShadow: '0 25px 70px rgba(99, 102, 241, 0.2)',
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-overlay': {
                      opacity: 0.3,
                    },
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
                    background: project.gradient,
                    zIndex: 2,
                  }}
                />

                {/* Project Image with Overlay */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: project.gradient,
                      opacity: 0.15,
                      transition: 'opacity 0.3s ease',
                    }}
                  />

                  {/* Icon Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: project.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                      border: '3px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {project.icon}
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 'calc(100% - 200px)' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      background: project.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      flex: 1,
                      color: 'var(--text-secondary)',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tech Stack */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'var(--accent)',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      />
                    ))}
                    {project.techStack.length > 3 && (
                      <Chip
                        label={`+${project.techStack.length - 3}`}
                        size="small"
                        sx={{
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub fontSize="small" />}
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        flex: 1,
                        borderColor: 'rgba(139,92,246,0.3)',
                        color: 'var(--primary)',
                        py: 1,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: 'var(--primary)',
                          background: 'rgba(139,92,246,0.1)',
                        },
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Launch fontSize="small" />}
                      href={project.demo}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        flex: 1,
                        background: project.gradient,
                        py: 1,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 14px rgba(139,92,246,0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(139,92,246,0.4)',
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            open={Boolean(selectedProject)}
            onClose={handleCloseModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
                sx: {
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  backdropFilter: 'blur(8px)',
                },
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
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, type: 'spring' }}
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                outline: 'none',
              }}
            >
              <Box
                className="glass-card"
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  borderRadius: '24px',
                  background: 'rgba(10, 10, 20, 0.95)',
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
                    background: selectedProject.gradient,
                    zIndex: 2,
                  }}
                />

                {/* Close Button */}
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 3,
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.9)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Image Header */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 300,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,20,0.9) 100%)',
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: selectedProject.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 8px 24px rgba(139,92,246,0.3)',
                      }}
                    >
                      {selectedProject.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          background: selectedProject.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {selectedProject.name}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      lineHeight: 1.8,
                      fontSize: '1.05rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {selectedProject.fullDescription}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Technologies Used
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                    {selectedProject.techStack.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        sx={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'var(--accent)',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          px: 1,
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<GitHub />}
                      href={selectedProject.github}
                      target="_blank"
                      fullWidth
                      sx={{
                        borderColor: 'rgba(139,92,246,0.3)',
                        color: 'var(--primary)',
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: 'var(--primary)',
                          background: 'rgba(139,92,246,0.1)',
                        },
                      }}
                    >
                      View Source Code
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Launch />}
                      href={selectedProject.demo}
                      target="_blank"
                      fullWidth
                      sx={{
                        background: selectedProject.gradient,
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1rem',
                        boxShadow: '0 8px 24px rgba(139,92,246,0.4)',
                        '&:hover': {
                          boxShadow: '0 12px 32px rgba(139,92,246,0.5)',
                        },
                      }}
                    >
                      View Live Demo
                    </Button>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;