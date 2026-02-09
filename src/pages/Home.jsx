import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import developerImg from "../assets/img.jpg";

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
  Cloud,
  Storage,
  Code,
  Terminal,
  Settings,
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
                  label="Open to opportunities"
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
                  Full Stack{' '}
                  <Box
                    component="span"
                    sx={{
                      color: 'primary.main',
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    Developer
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
                  & DevOps Engineer.
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
                  Je suis un développeur Full Stack et ingénieur DevOps passionné par la création d'applications
                  modernes et l'automatisation d'infrastructures cloud. Spécialisé React, Spring Boot, Laravel,
                  Kubernetes, Docker et CI/CD.
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
                    component={Link}
                    to="/about"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.125rem',
                      borderRadius: 3,
                      borderColor: 'divider',
                      textDecoration: 'none',
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
                    src={developerImg}
                    alt="Franck Judes - Full Stack Developer & DevOps Engineer"
                    style={{
                      width: '100%',
                      height: '120%',
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
                  { icon: <Cloud />, label: 'Kubernetes & Docker' },
                  { icon: <Storage />, label: 'CI/CD & GitOps' },
                  { icon: <Code />, label: 'React & Spring Boot' },
                  { icon: <Terminal />, label: 'Laravel & Node.js' },
                  { icon: <Settings />, label: 'AWS & Terraform' },
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
                Featured Projects
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                Une sélection de mes projets DevOps et Full Stack sur GitHub.
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
              title: 'KAIROS-HARMONI',
              category: 'Kairos',
              tags: ['React 19', 'Spring Boot', 'BPMN', 'Docker'],
              description: 'Application de gestion d\'entreprise avec BPMN, diagrammes interactifs, Gantt, éditeur Tiptap et analytics.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
              link: '/project/0',
              isPrivate: true,
            },
            {
              title: 'KAIROS-ESIGN',
              category: 'Kairos',
              tags: ['React 18', 'Spring Boot', 'Docker', 'PDF'],
              description: 'Plateforme de signature électronique avec drag-and-drop, visualisation PDF et gestion documentaire.',
              image: 'https://images.unsplash.com/photo-1557992260-ec58e38d363c?w=800&q=80',
              link: '/project/1',
              isPrivate: true,
            },
            {
              title: 'Kairos-KM-Stable',
              category: 'Kairos',
              tags: ['Laravel 9', 'PHP 8', 'Docker', 'LDAP'],
              description: 'Système de gestion des connaissances avec authentification LDAP, génération PDF et WebSockets temps réel.',
              image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
              link: '/project/2',
              isPrivate: true,
            },
          ].map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ScrollReveal variant="fadeUp" delay={index * 0.1}>
                <Card
                  component={Link}
                  to={project.link}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', pt: '65%' }}>
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
                    <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-end' }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          fontWeight: 900,
                          fontSize: '0.625rem',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          bgcolor: project.category === 'Kairos' ? '#E91E63' : 'primary.main',
                          color: 'white',
                        }}
                      />
                      {project.isPrivate && (
                        <Chip
                          label="PRIVATE"
                          size="small"
                          sx={{
                            fontWeight: 900,
                            fontSize: '0.625rem',
                            letterSpacing: 1,
                            bgcolor: 'warning.main',
                            color: 'white',
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.125rem',
                        color: 'text.primary',
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

      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, lg: 12 }, px: { xs: 3, lg: 8 } }}>
        <ScrollReveal variant="fadeUp">
          <Grid container spacing={4}>
            {[
              { value: '96+', label: 'Projets GitHub' },
              { value: '50+', label: 'Technologies maîtrisées' },
              { value: 'DevOps', label: 'Expertise Cloud' },
              { value: 'Full Stack', label: 'Développement Web' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '2rem', lg: '2.5rem' },
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ScrollReveal>
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
                "L'automatisation et l'infrastructure as code ne sont pas juste des outils,
                ce sont les fondations d'un développement moderne et scalable."
              </Typography>

              <Box>
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700 }}>
                  Franck Judes
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Full Stack Developer & DevOps Engineer
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
