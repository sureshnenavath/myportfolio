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
  TextField,
  Button,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
  Download,
} from '@mui/icons-material';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'sureshnenavath09@gmail.com',
      link: 'mailto:sureshnenavath09@gmail.com',
      color: '#ef4444',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 XXXXXXXX80',
      link: 'tel:+916309767996',
      color: '#22c55e',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#',
      color: '#3b82f6',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nenavath-suresh/',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: 'https://github.com/sureshnenavath',
      color: '#333',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
  };

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
                Get In Touch
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Let's connect and discuss opportunities. I'm always excited to work on new projects!
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? '#e2e8f0' : '#1e293b',
                    mb: 4,
                  }}
                >
                  Contact Information
                </Typography>

                {/* Contact Cards */}
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Card
                        sx={{
                          mb: 2,
                          background: isDarkMode
                            ? 'linear-gradient(145deg, #1e293b, #334155)'
                            : 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                          borderRadius: 2,
                          boxShadow: isDarkMode
                            ? '0 4px 15px rgba(0, 0, 0, 0.3)'
                            : '0 4px 15px rgba(0, 0, 0, 0.1)',
                          border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                          cursor: info.link !== '#' ? 'pointer' : 'default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: info.link !== '#' ? 'translateX(5px)' : 'none',
                          },
                        }}
                        onClick={() => info.link !== '#' && window.open(info.link)}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                              sx={{
                                color: info.color,
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  color: isDarkMode ? '#e2e8f0' : '#1e293b',
                                  mb: 0.5,
                                }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </Box>

                {/* Social Links */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: isDarkMode ? '#e2e8f0' : '#1e293b',
                      mb: 2,
                    }}
                  >
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.url}
                          target="_blank"
                          sx={{
                            background: social.color,
                            color: 'white',
                            width: 60,
                            height: 60,
                            '&:hover': {
                              background: social.color,
                              opacity: 0.8,
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>

                {/* Download Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Download />}
                    href="https://drive.google.com/file/d/1PLzrbZ6ddO-yWo1dnVTDYql2L1N9uMRn/view?usp=sharing"
                    download
                    sx={{
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5855eb, #7c3aed)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
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
                      Send Message
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? '#475569' : '#d1d5db',
                            },
                            '&:hover fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#6366f1',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: isDarkMode ? '#cbd5e1' : '#64748b',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: isDarkMode ? '#e2e8f0' : '#1e293b',
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? '#475569' : '#d1d5db',
                            },
                            '&:hover fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#6366f1',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: isDarkMode ? '#cbd5e1' : '#64748b',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: isDarkMode ? '#e2e8f0' : '#1e293b',
                          },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{
                          mb: 3,
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: isDarkMode ? '#475569' : '#d1d5db',
                            },
                            '&:hover fieldset': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#6366f1',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: isDarkMode ? '#cbd5e1' : '#64748b',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: isDarkMode ? '#e2e8f0' : '#1e293b',
                          },
                        }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          fullWidth
                          sx={{
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #5855eb, #7c3aed)',
                            },
                            borderRadius: 2,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                mt: 8,
                pt: 4,
                borderTop: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  mb: 2,
                }}
              >
                © 2025 Nenavath Suresh. All rights reserved.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode ? '#94a3b8' : '#94a3b8',
                }}
              >
                Built with ❤️ using React.js and Material-UI
              </Typography>
            </Box>
          </motion.div>
        </motion.div>

        {/* Success Alert */}
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowAlert(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
