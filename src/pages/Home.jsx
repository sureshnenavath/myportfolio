import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Spotlight from '../components/Spotlight';

const Home = () => {
  return (
    <Spotlight className="min-h-screen flex items-center justify-center">
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'var(--primary)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                mb: 2,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
              }}
            >
              Hello, I'm
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '6rem', lg: '8rem' },
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Nenavath Suresh
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                color: 'var(--text-secondary)',
                fontWeight: 300,
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Building <span style={{ color: 'var(--secondary)' }}>digital experiences</span> that matter.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              component={Link}
              to="/projects"
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 2,
                borderRadius: '50px',
                fontSize: '1.1rem',
                textTransform: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Spotlight>
  );
};

export default Home;
