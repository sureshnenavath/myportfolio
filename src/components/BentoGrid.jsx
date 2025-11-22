import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const BentoGrid = ({ className, children }) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
                maxWidth: '1200px',
                mx: 'auto',
                p: { xs: 2, md: 4 },
            }}
            className={className}
        >
            {children}
        </Box>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    colSpan = 1,
    rowSpan = 1,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
            }}
        >
            <Box
                className="glass-card"
                sx={{
                    height: '100%',
                    borderRadius: '24px',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                    },
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {header}
                <Box sx={{ mt: 2, zIndex: 1 }}>
                    {icon}
                    <Box sx={{ mt: 2 }}>
                        {title && (
                            <Box
                                component="h3"
                                sx={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 700,
                                    fontSize: '1.25rem',
                                    mb: 1,
                                    color: 'var(--text-primary)',
                                }}
                            >
                                {title}
                            </Box>
                        )}
                        {description && (
                            <Box
                                component="p"
                                sx={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {description}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};
