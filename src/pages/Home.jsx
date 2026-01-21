import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Stack,
  Paper,
} from '@mui/material';
import {
  Verified,
  ArrowDownward,
  DesignServices,
  BrandingWatermark,
  Devices,
  PhoneIphone,
  AutoAwesome,
  ArrowForward,
  FormatQuote,
} from '@mui/icons-material';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <>
      {/* Hero Section - Enhanced with bold typography */}
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 10, lg: 16 },
          px: { xs: 3, lg: 8 },
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: { xs: 300, lg: 500 },
            height: { xs: 300, lg: 500 },
            bgcolor: 'primary.main',
            opacity: 0.08,
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: { xs: 300, lg: 500 },
            height: { xs: 300, lg: 500 },
            bgcolor: 'secondary.main',
            opacity: 0.08,
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />

        <Grid container spacing={{ xs: 6, lg: 12 }} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid item xs={12} lg={6}>
            <Stack spacing={{ xs: 4, lg: 6 }}>
              <ScrollReveal variant="fadeUp" delay={0}>
                <Chip
                  icon={<Verified sx={{ fontSize: 16 }} />}
                  label="Available for projects"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    width: 'fit-content',
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                  }}
                />
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '4rem', lg: '5.5rem' },
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'text.primary',
                  }}
                >
                  Crafting{' '}
                  <Box
                    component="span"
                    sx={{
                      color: 'primary.main',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    meaningful
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: { xs: 8, lg: 12 },
                        left: 0,
                        width: '100%',
                        height: { xs: 12, lg: 16 },
                        bgcolor: 'primary.main',
                        opacity: 0.2,
                        zIndex: -1,
                        transform: 'rotate(-1deg)',
                      }}
                    />
                  </Box>
                  <br />
                  digital experiences.
                </Typography>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.2}>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    maxWidth: 550,
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', lg: '1.125rem' },
                  }}
                >
                  I'm a UI/UX Designer focused on building functional and beautiful products
                  for global brands, combining Material Design precision with creative flair.
                </Typography>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                  <Link to="/work" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowDownward />}
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.125rem',
                        borderRadius: 3,
                        bgcolor: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'translateY(-2px)',
                          boxShadow: 4,
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      View Work
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                      borderRadius: 3,
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    Read Bio
                  </Button>
                </Stack>
              </ScrollReveal>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            <ScrollReveal variant="scale" delay={0.4}>
              <Box
                sx={{
                  position: 'relative',
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'primary.main',
                    opacity: 0.15,
                    borderRadius: 6,
                    transform: 'rotate(3deg) scale(1.02)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'rotate(6deg) scale(1.02)',
                    },
                  }}
                />
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: 1,
                    borderRadius: 6,
                    overflow: 'hidden',
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 60px rgba(0, 0, 0, 0.5)' : '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY9Aqz9X1WSebZtskpr55FAXkZoQcblZxvHRYWiWFNyOSUzwoN5dzDotuHIXXgKjZ85blVY-7sojQwrK1hJw7WHGe3ju_PxA1GKWrAICw4iH9tku9wwu8xVhKePuelPeblk50_Z7qK_DLf6_K74Qf3wmTu4qWYBMdGDqhbq8zSjHMGKfso--hEM0jbnObXdMEvmImnvvn1EOtoF-ByS7EV5ZpRf4Ja7MiBmyTuZosbcNPRnjzXDwrUMwTb153MCazmTYdvbAK4k6FG"
                    alt="Designer Portrait"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>

      {/* Skills Section - Enhanced with better styling */}
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'grey.50',
          py: 8,
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 8 }, position: 'relative', zIndex: 1 }}>
          <ScrollReveal variant="fadeUp">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  whiteSpace: 'nowrap',
                }}
              >
                Specializing in
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {[
                  { icon: <DesignServices />, label: 'UI/UX Design' },
                  { icon: <BrandingWatermark />, label: 'Visual Identity' },
                  { icon: <Devices />, label: 'Web App Architecture' },
                  { icon: <PhoneIphone />, label: 'Mobile First' },
                  { icon: <AutoAwesome />, label: 'Motion Graphics' },
                ].map((skill, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      px: 3,
                      py: 2,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      boxShadow: 1,
                      border: '1px solid',
                      borderColor: 'divider',
                      cursor: 'default',
                    }}
                  >
                    <Box sx={{ color: 'primary.main' }}>{skill.icon}</Box>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      {skill.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* Featured Work Section - Enhanced with animations */}
      <Container maxWidth="xl" sx={{ py: { xs: 12, lg: 16 }, px: { xs: 3, lg: 8 } }}>
        <ScrollReveal variant="fadeUp">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 8 }}>
            <Box>
              <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', lg: '2.5rem' } }}>
                Featured Work
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                A selection of recent projects from various industries.
              </Typography>
            </Box>
            <Link to="/work" style={{ textDecoration: 'none' }}>
              <Box
                component={motion.div}
                whileHover={{ x: 5 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'primary.main',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Browse all projects
                <ArrowForward />
              </Box>
            </Link>
          </Box>
        </ScrollReveal>

        <Grid container spacing={4}>
          {[
            {
              title: 'Aura Fintech App',
              category: 'Fintech',
              tags: ['Product Design', 'UI/UX'],
              description: 'Reimagining the banking experience for digital-first users with high accessibility standards.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl2A40qIEsn7PbFDqeuT9bL-QylsEhU0rKupfmNbsTZ4GCe540uKz4YZ-5LmXhXLA39dbcfb7x0oqWR-ZUBzsJyeGY491kGDNAvolIdQ3ulq33g82MwvJ6mFjEvcfiN027uQJBD__uBdfxUHu_xziA6tYELW3OBZVcZKGYSGXZg32msP0tPZ_8vkBkVICBu0IdLSfGAe-H-6CHagbODKNk143yn3Jd82H7sNFE2bMrF6mCqNAsr8uZz24_0UaV9g2WW-F0Yrfl0Xwc',
            },
            {
              title: 'Eco-Store Design',
              category: 'Retail',
              tags: ['Visual Identity', 'E-commerce'],
              description: 'A sustainable brand identity and platform for curated eco-friendly household goods.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwk-Nt_Ey134GTUKe0lFeZyJFl5e59LETTThaklGLL8LSB-ht1I4TDxkuppdDgXucbUC2tNJ2cvmA-obYTvrgIs3qw0qaYwkZrU_7l7jhVkTjJ1JMK2SjFaMO48iyMKQFYy7Ap42nxvZiNQsc0BFsle0pLPuUAp2noXJ26EEo60iCkHlcOf3JU6cNPzPAF3yUAK0vmIpK3SjGtpbHO6y-0stqNyRTyZ73i_cEhaJprXVAq-AHncAhKTPlQTnwVpd3JSKLP4oMZJSQZ',
            },
            {
              title: 'Pulse Health Tracker',
              category: 'Health',
              tags: ['Web App', 'Healthcare'],
              description: 'Real-time biometric monitoring dashboard for personalized wellness and healthcare professionals.',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjjeQmNw8wtyROGXuWmUa8X6_IHyMSth77r5-frsUUiFlbaGesv8WYV6-nDYx40Iy9syXzen-cdGQ8TpM7QOrlf2ngOeK9-zWGbIY0WnGDPxQdrdni7y-0vEu47NkuFaSTRDTU-FCEQpO-4J-M0V-LSC1udjos1yYrXyL9DJRJ-eUyDClTBR14SOagED5_0ZCXTAHJbPD-kWkaoGXJDue1HjH-nK343--7eVtoArrwoNFon1dL51UHT_d8ENxN9V4JCi24KSqqaxV7',
            },
          ].map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ScrollReveal variant="fadeUp" delay={index * 0.1}>
                <Card
                  component={motion.div}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', pt: '70%' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 900,
                        fontSize: '0.625rem',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        bgcolor: 'primary.main',
                        color: 'white',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.125rem',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'background.default',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            borderRadius: 1.5,
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonial Section - Enhanced with better design */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, lg: 14 }, px: { xs: 3, lg: 8 } }}>
        <ScrollReveal variant="scale">
          <Paper
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 5,
              p: { xs: 6, lg: 12 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {/* Decorative gradient orbs */}
            <Box
              sx={{
                position: 'absolute',
                top: -64,
                left: -64,
                width: 200,
                height: 200,
                bgcolor: 'primary.main',
                opacity: 0.1,
                borderRadius: '50%',
                filter: 'blur(80px)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -64,
                right: -64,
                width: 200,
                height: 200,
                bgcolor: 'secondary.main',
                opacity: 0.1,
                borderRadius: '50%',
                filter: 'blur(80px)',
              }}
            />

            <Stack spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FormatQuote sx={{ fontSize: 32, color: 'white' }} />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontStyle: 'italic',
                  color: 'text.primary',
                  maxWidth: 800,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  fontSize: { xs: '1.5rem', lg: '2rem' },
                }}
              >
                "His approach to Material Design isn't just about guidelines; it's about creating
                a tactile experience that users instinctively understand."
              </Typography>

              <Box>
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700 }}>
                  Elena Richardson
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Design Director at Nexus Tech
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </ScrollReveal>
      </Container>
    </>
  );
};

export default Home;
