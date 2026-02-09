import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  AlternateEmail,
  LocationOn,
  Send,
  Code,
  Cloud,
} from '@mui/icons-material';
import developerImg from "../assets/img.jpg";

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <>
      {/* About Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, lg: 12 }, px: { xs: 3, lg: 6 }, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={{ xs: 8, lg: 12 }} alignItems={{ lg: 'flex-start' }}>
          {/* Left - Portrait */}
          <Grid item xs={12} lg={6} sx={{ maxWidth: { lg: 480 } }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'primary.main',
                  opacity: 0.2,
                  borderRadius: { xs: '2.5rem', lg: '3rem' },
                  transform: 'rotate(3deg) scale(1.05)',
                }}
              />
              <Box
                component="img"
                src={developerImg}
                alt="Franck Judes - Full Stack Developer & DevOps Engineer"
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  borderRadius: { xs: '2.5rem', lg: '3rem' },
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)' : 3,
                }}
              />
            </Box>
          </Grid>

          {/* Right - About Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, lg: 6 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', lg: '4rem' },
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  Full Stack <Box component="span" sx={{ color: 'primary.main' }}>Developer</Box> & DevOps Engineer.
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  Passionné par le développement web et l'ingénierie Cloud, je combine expertise Full Stack et
                  pratiques DevOps pour créer des applications scalables et résilientes. Avec 96+ projets GitHub,
                  je maîtrise React, Spring Boot, Laravel, Kubernetes, Docker et les pipelines CI/CD.
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  Mon approche : écrire du code propre, automatiser l'infrastructure, et garantir la qualité
                  à chaque étape du développement.
                </Typography>
              </Box>

              {/* Stats */}
              <Grid container spacing={4} sx={{ py: 2 }}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ color: 'primary.main' }}>
                      <GitHub fontSize="large" />
                    </Box>
                    <Box>
                      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>
                        96+
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem' }}>
                        Projets GitHub
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ color: 'primary.main' }}>
                      <Code fontSize="large" />
                    </Box>
                    <Box>
                      <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>
                        50+
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.875rem' }}>
                        Technologies
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* Tech Stack Highlights */}
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 2, mb: 2 }}>
                  Core Technologies
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  {[
                    { icon: <Cloud />, label: 'Kubernetes' },
                    { icon: <Code />, label: 'React' },
                    { icon: <Code />, label: 'Spring Boot' },
                    { icon: <Code />, label: 'Laravel' },
                    { icon: <Cloud />, label: 'Docker' },
                    { icon: <Cloud />, label: 'AWS' },
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Box sx={{ color: 'primary.main', fontSize: '0.875rem' }}>{tech.icon}</Box>
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
                        {tech.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 2 }}>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    {
                      icon: <GitHub />,
                      label: 'GitHub',
                      href: 'https://github.com/FranckJudes',
                    },
                    {
                      icon: <LinkedIn />,
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/franck-judes-devops-cameroun-yaounde-backend/',
                    },
                    {
                      icon: <Email />,
                      label: 'Email',
                      href: 'mailto:franckjudes87@gmail.com',
                    },
                  ].map((social, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'text.secondary',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)' : 1,
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderColor: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {social.icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Skills Section */}
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'grey.50',
          py: { xs: 8, lg: 12 },
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              fontSize: { xs: '1.75rem', lg: '2.25rem' },
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Expertise Techniques
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: 'DevOps & Cloud',
                skills: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'AWS', 'CI/CD', 'GitOps', 'ArgoCD'],
              },
              {
                title: 'Backend',
                skills: ['Spring Boot', 'Laravel', 'Node.js', 'Java', 'PHP', 'REST API', 'Kafka', 'PostgreSQL'],
              },
              {
                title: 'Frontend',
                skills: ['React', 'React Native', 'Expo', 'Angular', 'Vue.js', 'TypeScript', 'Redux', 'Next.js'],
              },
              {
                title: 'Observability',
                skills: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'ELK Stack', 'Zipkin', 'Vault', 'Keycloak'],
              },
            ].map((category, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: 2, color: 'primary.main' }}>
                    {category.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box
                        key={skillIndex}
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: 'background.default',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'text.secondary',
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, lg: 16 }, px: { xs: 3, lg: 6 } }}>
        <Grid container spacing={{ xs: 8, lg: 12 }}>
          {/* Left - Contact Info */}
          <Grid item xs={12} lg={5} sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2rem', lg: '2.5rem' }, mb: 3 }}>
                Travaillons ensemble.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                Que vous ayez un projet spécifique en tête ou que vous souhaitiez simplement échanger,
                n'hésitez pas à me contacter.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                {
                  icon: <AlternateEmail />,
                  label: 'Email',
                  value: 'franckjudes87@gmail.com',
                  href: 'mailto:franckjudes87@gmail.com',
                },
                {
                  icon: <GitHub />,
                  label: 'GitHub',
                  value: 'github.com/FranckJudes',
                  href: 'https://github.com/FranckJudes',
                },
                {
                  icon: <LocationOn />,
                  label: 'Localisation',
                  value: 'Yaoundé, Cameroun / Remote',
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  sx={{ display: 'flex', alignItems: 'center', gap: 3, textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      bgcolor: 'primary.main',
                      opacity: 0.1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right - Contact Form */}
          <Grid item xs={12} lg={7}>
            <Paper
              sx={{
                bgcolor: 'background.paper',
                borderRadius: { xs: '2rem', lg: '2.5rem' },
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)' : 3,
                p: { xs: 4, lg: 6 },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'text.secondary', mb: 1, ml: 0.5 }}>
                      Nom complet
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Jean Dupont"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'transparent',
                          borderRadius: 3,
                          border: '2px solid',
                          borderColor: 'divider',
                          '&:hover': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'text.secondary', mb: 1, ml: 0.5 }}>
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="jean@example.com"
                      type="email"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'transparent',
                          borderRadius: 3,
                          border: '2px solid',
                          borderColor: 'divider',
                          '&:hover': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Box>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'text.secondary', mb: 1, ml: 0.5 }}>
                    Sujet
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Comment puis-je vous aider ?"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'transparent',
                        borderRadius: 3,
                        border: '2px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'text.secondary', mb: 1, ml: 0.5 }}>
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Parlez-moi de votre projet..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'transparent',
                        borderRadius: 3,
                        border: '2px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    py: 2,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.4)' : 1,
                  }}
                >
                  Envoyer le message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
