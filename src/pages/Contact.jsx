import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, TextField, Button, Container, IconButton, Snackbar, Alert } from '@mui/material';
import { Send, Email, LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import Spotlight from '../components/Spotlight';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: <Email />, url: 'mailto:sureshnenavath09@gmail.com', label: 'Email' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/nenavath-suresh/', label: 'LinkedIn' },
    { icon: <GitHub />, url: 'https://github.com/sureshnenavath', label: 'GitHub' },
  ];

  return (
    <Spotlight className="min-h-screen flex items-center justify-center pb-20 pt-4">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                mb: 2,
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'var(--text-secondary)',
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 300,
                mb: 6,
              }}
            >
              Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 500,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'var(--primary)' },
                  '& .MuiInputBase-input': { color: 'var(--text-primary)', fontSize: '1.1rem' },
                  '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'var(--primary)' },
                  '& .MuiInputBase-input': { color: 'var(--text-primary)', fontSize: '1.1rem' },
                  '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                  '& .MuiInput-underline:after': { borderBottomColor: 'var(--primary)' },
                  '& .MuiInputBase-input': { color: 'var(--text-primary)', fontSize: '1.1rem' },
                  '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                }}
              />

              <Button
                type="submit"
                endIcon={<Send />}
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  borderRadius: '50px',
                  fontSize: '1rem',
                  textTransform: 'none',
                  color: '#fff',
                  background: 'var(--primary)',
                  border: '1px solid var(--primary)',
                  alignSelf: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'var(--secondary)',
                    borderColor: 'var(--secondary)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

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
          sx={{
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Spotlight>
  );
};

export default Contact;