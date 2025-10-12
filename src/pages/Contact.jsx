import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  Card,
  CardContent,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
  ContactMail,
  Language,
} from '@mui/icons-material';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email',
      detail: 'sureshnenavath09@gmail.com',
      link: 'mailto:sureshnenavath09@gmail.com',
      color: '#FF6B6B',
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Phone',
      detail: '+91 XXXXXXXX80',
      link: 'tel:+916309767996',
      color: '#4ECDC4',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Location',
      detail: 'Hyderabad, India',
      color: '#45B7D1',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn sx={{ fontSize: 32 }} />,
      name: 'LinkedIn',
      username: '/nenavath-suresh',
      url: 'https://www.linkedin.com/in/nenavath-suresh/',
      color: '#0077B5',
    },
    {
      icon: <GitHub sx={{ fontSize: 32 }} />,
      name: 'GitHub',
      username: '/sureshnenavath',
      url: 'https://github.com/sureshnenavath',
      color: '#333333',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 6, md: 10 },
        background: isDarkMode
          ? 'linear-gradient(to bottom, #0f0f23 0%, #1a1a2e 100%)'
          : 'linear-gradient(to bottom, #f0f4f8 0%, #d9e2ec 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <ContactMail
              sx={{
                fontSize: 80,
                mb: 2,
                color: isDarkMode ? '#60A5FA' : '#3B82F6',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: isDarkMode ? '#fff' : '#1e293b',
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: isDarkMode ? '#94a3b8' : '#64748b',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Have a project in mind or just want to chat? Feel free to reach out!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left Side - Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: isDarkMode
                    ? 'rgba(30, 41, 59, 0.7)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: isDarkMode
                    ? '0 10px 40px rgba(0,0,0,0.5)'
                    : '0 10px 40px rgba(0,0,0,0.1)',
                  border: isDarkMode ? '1px solid rgba(96, 165, 250, 0.2)' : 'none',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: isDarkMode ? '#60A5FA' : '#3B82F6',
                    }}
                  >
                    Send a Message
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 4,
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                    }}
                  >
                    I'll get back to you within 24 hours
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#fff',
                              '&:hover fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#fff',
                              '&:hover fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#fff',
                              '&:hover fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#fff',
                              '&:hover fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: isDarkMode ? '#60A5FA' : '#3B82F6',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          endIcon={<Send />}
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Right Side - Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: isDarkMode ? '#60A5FA' : '#3B82F6',
                  }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                  {contactMethods.map((method, index) => (
                    <Box
                      key={index}
                      component={method.link ? motion.a : motion.div}
                      href={method.link}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      sx={{
                        position: 'relative',
                        flex: '1 1 calc(33.333% - 14px)',
                        minWidth: '150px',
                        background: isDarkMode
                          ? `linear-gradient(135deg, ${method.color}15, ${method.color}05)`
                          : `linear-gradient(135deg, ${method.color}10, #ffffff)`,
                        backdropFilter: 'blur(10px)',
                        borderRadius: 3,
                        p: 3,
                        cursor: method.link ? 'pointer' : 'default',
                        textDecoration: 'none',
                        color: 'inherit',
                        border: isDarkMode
                          ? `2px solid ${method.color}30`
                          : `2px solid ${method.color}20`,
                        boxShadow: `0 4px 15px ${method.color}15`,
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: method.color,
                          boxShadow: `0 8px 25px ${method.color}30`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {/* Decorative gradient blob */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -20,
                          right: -20,
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${method.color}20, transparent)`,
                          filter: 'blur(20px)',
                        }}
                      />

                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 2.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: method.color,
                            color: '#fff',
                            mb: 2,
                            boxShadow: `0 6px 20px ${method.color}40`,
                          }}
                        >
                          {method.icon}
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: isDarkMode ? '#94a3b8' : '#64748b',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                          }}
                        >
                          {method.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            color: isDarkMode ? '#fff' : '#1e293b',
                            fontSize: '0.95rem',
                            mt: 0.5,
                            wordBreak: 'break-word',
                          }}
                        >
                          {method.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: isDarkMode ? '#60A5FA' : '#3B82F6',
                  }}
                >
                  Social Profiles
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <Box
                      key={index}
                      component={motion.a}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2.5,
                        p: 2.5,
                        borderRadius: 3,
                        textDecoration: 'none',
                        background: isDarkMode
                          ? `linear-gradient(135deg, ${social.color}20, ${social.color}05)`
                          : `linear-gradient(135deg, #ffffff, ${social.color}08)`,
                        border: isDarkMode
                          ? `2px solid ${social.color}40`
                          : `2px solid ${social.color}30`,
                        cursor: 'pointer',
                        overflow: 'hidden',
                        boxShadow: `0 4px 15px ${social.color}20`,
                        '&:hover': {
                          borderColor: social.color,
                          boxShadow: `0 8px 30px ${social.color}40`,
                          '& .social-icon': {
                            transform: 'rotate(10deg) scale(1.1)',
                          },
                          '& .arrow-icon': {
                            transform: 'translateX(5px)',
                          },
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {/* Animated gradient background */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${social.color}10, transparent)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      />

                      {/* Icon */}
                      <Box
                        className="social-icon"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: social.color,
                          color: '#fff',
                          flexShrink: 0,
                          boxShadow: `0 6px 20px ${social.color}50`,
                          transition: 'transform 0.3s ease',
                          zIndex: 1,
                        }}
                      >
                        {social.icon}
                      </Box>

                      {/* Text Content */}
                      <Box sx={{ flex: 1, zIndex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: isDarkMode ? '#fff' : '#1e293b',
                            fontSize: '1.1rem',
                            mb: 0.3,
                          }}
                        >
                          {social.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: isDarkMode ? '#94a3b8' : '#64748b',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                          }}
                        >
                          {social.username}
                        </Typography>
                      </Box>

                      {/* Arrow Icon */}
                      <Box
                        className="arrow-icon"
                        sx={{
                          zIndex: 1,
                          color: social.color,
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  href="https://drive.google.com/file/d/16rCE330gJcew8CQeQsDGCQ7WjD1KHZWu/view?usp=sharing"
                  target="_blank"
                  sx={{
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: 4,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(245, 87, 108, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  📄 Download Resume
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity="success"
          variant="filled"
          sx={{ fontSize: '1rem' }}
        >
          🎉 Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;