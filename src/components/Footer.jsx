import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <GitHub />, url: 'https://github.com/sureshnenavath' },
        { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/nenavath-suresh/' },
        { icon: <Email />, url: 'mailto:sureshnenavath09@gmail.com' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                zIndex: 10,
                py: 4,
                px: 2,
                textAlign: 'center',
                background: 'linear-gradient(to top, rgba(3, 0, 20, 0.9), transparent)',
            }}
        >
            <Box
                className="glass-card"
                sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    p: 3,
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
            >
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IconButton
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'var(--text-secondary)',
                                    '&:hover': {
                                        color: 'var(--primary)',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                    },
                                }}
                            >
                                {link.icon}
                            </IconButton>
                        </motion.div>
                    ))}
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                    }}
                >
                    © {currentYear} Nenavath Suresh. All rights reserved.
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                    }}
                >
                    Built with React, MUI & Framer Motion
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
