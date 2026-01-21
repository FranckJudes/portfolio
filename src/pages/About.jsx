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
  Share,
  Email,
  Public,
  AlternateEmail,
  LocationOn,
  Send,
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
                alt="Designer Portrait"
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
                  I design for the <Box component="span" sx={{ color: 'accent.main' }}>future</Box> of the web.
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1.25rem', lineHeight: 1.6 }}>
                  Based in San Francisco, I am a product designer with a decade of experience in building high-performance design systems and intuitive user interfaces. My work focuses on the intersection of human psychology and digital craftsmanship.
                </Typography>
              </Box>

              {/* Stats */}
              <Grid container spacing={4} sx={{ py: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    100+
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Projects Completed
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    12
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Design Awards
                  </Typography>
                </Grid>
              </Grid>

              {/* Social Links */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 2 }}>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { icon: <Share />, label: 'Share' },
                    { icon: <Email />, label: 'Email' },
                    { icon: <Public />, label: 'Website' },
                  ].map((social, index) => (
                    <Box
                      key={index}
                      component="a"
                      href="#"
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

      {/* Contact Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, lg: 16 }, px: { xs: 3, lg: 6 } }}>
        <Grid container spacing={{ xs: 8, lg: 12 }}>
          {/* Left - Contact Info */}
          <Grid item xs={12} lg={5} sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2rem', lg: '2.5rem' }, mb: 3 }}>
                Let's build something extraordinary.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                Whether you have a specific project in mind or just want to say hello, my inbox is always open.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                {
                  icon: <AlternateEmail />,
                  label: 'Email',
                  value: 'hello@creative.studio',
                },
                {
                  icon: <LocationOn />,
                  label: 'Office',
                  value: 'San Francisco, CA',
                },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
                      Full Name
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="John Doe"
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
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="john@example.com"
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
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="How can I help?"
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
                    placeholder="Tell me about your project..."
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
                  Send Message
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
