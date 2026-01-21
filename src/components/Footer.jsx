import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GridView, ArrowUpward } from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 20,
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, opacity: 0.5 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                bgcolor: 'text.primary',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GridView sx={{ color: 'background.paper', fontSize: 16 }} />
            </Box>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700 }}>
              © 2024 DESIGN STUDIO
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4 }}>
            {['Dribbble', 'Behance', 'LinkedIn', 'Instagram'].map((social) => (
              <Typography
                key={social}
                component="a"
                href="#"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {social}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
            onClick={scrollToTop}
          >
            Back to top
            <ArrowUpward sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
