import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  GridView,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useThemeContext } from '../contexts/ThemeContext';

const Navigation = () => {
  const location = useLocation();
  const { ThemeToggleButton } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'primary.main',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <GridView />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                textTransform: 'uppercase',
                color: 'text.primary',
              }}
            >
              Portfolio
            </Typography>
          </Box>
        </Link>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ flex: 1, px: 3, py: 4 }}>
        <AnimatePresence>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                style={{ textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItem
                  disablePadding
                  sx={{
                    mb: 2,
                    py: 2,
                    px: 3,
                    borderRadius: 3,
                    bgcolor:
                      location.pathname === link.path
                        ? 'primary.main'
                        : 'background.default',
                    color:
                      location.pathname === link.path
                        ? 'white'
                        : 'text.primary',
                    '&:hover': {
                      bgcolor:
                        location.pathname === link.path
                          ? 'primary.dark'
                          : 'action.hover',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 700,
                        fontSize: '1.125rem',
                      },
                    }}
                  />
                </ListItem>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </List>

      {/* Footer Actions */}
      <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
          <ThemeToggleButton />
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ py: 2, borderRadius: 3, fontWeight: 700 }}
        >
          Hire Me
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          height: 80,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Toolbar sx={{ maxWidth: 1400, mx: 'auto', width: '100%', px: { xs: 3, lg: 6 } }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05) rotate(5deg)',
                  },
                }}
              >
                <GridView />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                Portfolio
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, ml: 'auto' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ textDecoration: 'none', position: 'relative' }}
              >
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: location.pathname === link.path ? 'primary.main' : 'text.secondary',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                    position: 'relative',
                    ...(location.pathname === link.path && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -28,
                        left: 0,
                        width: '100%',
                        height: 2,
                        bgcolor: 'primary.main',
                      },
                    }),
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: { xs: 'auto', md: 2 } }}>
            <ThemeToggleButton />

            {/* Desktop CTA */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: 3,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 3,
                display: { xs: 'none', md: 'flex' },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Hire Me
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: 'flex', md: 'none' },
                width: 44,
                height: 44,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 400,
            boxSizing: 'border-box',
          },
        }}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          {drawerContent}
        </motion.div>
      </Drawer>

      {/* Overlay */}
      {mobileOpen && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            zIndex: (theme) => theme.zIndex.drawer - 1,
            display: { xs: 'block', md: 'none' },
          }}
        />
      )}
    </>
  );
};

export default Navigation;
