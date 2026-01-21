import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Chip
} from '@mui/material';
import {
  ArrowBack,
  OpenInNew,
  FormatQuote
} from '@mui/icons-material';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const project = {
    title: 'Aura Fintech',
    subtitle: 'Next-Gen Banking',
    description: 'How we built an inclusive, real-time financial dashboard for digital natives with deep focus on accessibility and motion design.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl2A40qIEsn7PbFDqeuT9bL-QylsEhU0rKupfmNbsTZ4GCe540uKz4YZ-5LmXhXLA39dbcfb7x0oqWR-ZUBzsJyeGY491kGDNAvolIdQ3ulq33g82MwvJ6mFjEvcfiN027uQJBD__uBdfxUHu_xziA6tYELW3OBZVcZKGYSGXZg32msP0tPZ_8vkBkVICBu0IdLSfGAe-H-6CHagbODKNk143yn3Jd82H7sNFE2bMrF6mCqNAsr8uZz24_0UaV9g2WW-F0Yrfl0Xwc',
    processImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjjeQmNw8wtyROGXuWmUa8X6_IHyMSth77r5-frsUUiFlbaGesv8WYV6-nDYx40Iy9syXzen-cdGQ8TpM7QOrlf2ngOeK9-zWGbIY0WnGDPxQdrdni7y-0vEu47NkuFaSTRDTU-FCEQpO-4J-M0V-LSC1udjos1yYrXyL9DJRJ-eUyDClTBR14SOagED5_0ZCXTAHJbPD-kWkaoGXJDue1HjH-nK343--7eVtoArrwoNFon1dL51UHT_d8ENxN9V4JCi24KSqqaxV7',
    sketchImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY9Aqz9X1WSebZtskpr55FAXkZoQcblZxvHRYWiWFNyOSUzwoN5dzDotuHIXXgKjZ85blVY-7sojQwrK1hJw7WHGe3ju_PxA1GKWrAICw4iH9tku9wwu8xVhKePuelPeblk50_Z7qK_DLf6_K74Qf3wmTu4qWYBMdGDqhbq8zSjHMGKfso--hEM0jbnObXdMEvmImnvvn1EOtoF-ByS7EV5ZpRf4Ja7MiBmyTuZosbcNPRnjzXDwrUMwTb153MCazmTYdvbAK4k6FG',
    finalUIImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwk-Nt_Ey134GTUKe0lFeZyJFl5e59LETTThaklGLL8LSB-ht1I4TDxkuppdDgXucbUC2tNJ2cvmA-obYTvrgIs3qw0qaYwkZrU_7l7jhVkTjJ1JMK2SjFaMO48iyMKQFYy7Ap42nxvZiNQsc0BFsle0pLPuUAp2noXJ26EEo60iCkHlcOf3JU6cNPzPAF3yUAK0vmIpK3SjGtpbHO6y-0stqNyRTyZ73i_cEhaJprXVAq-AHncAhKTPlQTnwVpd3JSKLP4oMZJSQZ',
    role: 'Lead Product Designer',
    duration: '6 Months (2023 - 2024)',
    client: 'Aura Financial Systems',
    techStack: ['Figma', 'React Native', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
    quote: {
      text: 'The Aura app completely changed how our users interact with their capital. The design is fluid and unmistakably modern.',
      author: 'James Chen',
      position: 'CTO, Aura Systems',
    },
  };

  return (
    <>
      {/* Header Section */}
      <Container maxWidth="xl" sx={{ py: 8, px: { xs: 3, lg: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Link to="/work" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ArrowBack sx={{ color: 'primary.main', fontSize: 16 }} />
              <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 2 }}>
                Back to Projects
              </Typography>
            </Box>
          </Link>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', lg: '4.5rem' },
              fontWeight: 900,
              lineHeight: 1.1,
              color: 'text.primary',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}: <Box component="span" sx={{ color: 'primary.main' }}>{project.subtitle}</Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.25rem', lg: '1.5rem' },
              color: 'text.secondary',
              maxWidth: 900,
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>
        </Box>
      </Container>

      {/* Hero Image */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 }, mb: 8 }}>
        <Box
          sx={{
            borderRadius: { xs: 3, lg: 5 },
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)' : 3,
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 600,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 }, pb: 16 }}>
        <Grid container spacing={8}>
          {/* Left Column - Content */}
          <Grid item xs={12} lg={8}>
            {/* The Challenge Section */}
            <Box sx={{ mb: 12 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  mt: 0,
                  fontSize: { xs: '1.875rem', lg: '2.25rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                }}
              >
                The Challenge
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                In a market saturated with complex financial tools, the objective was to strip away the noise and create a banking experience that felt tactile and intuitive. We needed to bridge the gap between heavy financial data and an effortless mobile-first interaction model.
              </Typography>
              <Typography sx={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                The core user base demanded speed, transparency, and a design language that didn't feel like a traditional corporate bank. Accessibility was not an afterthought; it was a fundamental requirement from the first wireframe.
              </Typography>
            </Box>

            {/* Process Image */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: 0.25,
                mb: 12,
              }}
            >
              <Box
                component="img"
                src={project.processImage}
                alt="Process details"
                sx={{
                  width: '100%',
                  borderRadius: 2.25,
                  border: '1px solid',
                  borderColor: 'divider',
                  opacity: 0.5,
                }}
              />
            </Box>

            {/* Design Approach Section */}
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  mt: 0,
                  fontSize: { xs: '1.875rem', lg: '2.25rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                }}
              >
                Design Approach
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                Leveraging Material Design 3's expressive color systems, we implemented a dynamic palette that shifts based on the user's financial status. We focused on "haptic-first" design, ensuring every touch interaction provided clear feedback.
              </Typography>
              <Typography sx={{ mb: 6, fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                Using elevation and subtle gradients, we created a sense of depth that helps users distinguish between primary actions and informational layers. The interface uses a strict 8dp grid to maintain rhythm across all screen sizes.
              </Typography>

              {/* Feature List */}
              <Box component="ul" sx={{ pl: 3, mb: 8 }}>
                {[
                  'System-wide dark mode optimization for OLED displays',
                  'High-contrast text components for WCAG AA compliance',
                  'Micro-interactions for transaction success states',
                  'Predictive search architecture for global actions',
                ].map((item, index) => (
                  <Box component="li" key={index} sx={{ mb: 2, fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.7 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Grid Images */}
            <Grid container spacing={2} sx={{ mb: 12, my: 8 }}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    component="img"
                    src={project.sketchImage}
                    alt="Sketching process"
                    sx={{ width: '100%', height: 192, objectFit: 'cover', opacity: 0.8 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    component="img"
                    src={project.finalUIImage}
                    alt="Final UI elements"
                    sx={{ width: '100%', height: 192, objectFit: 'cover', opacity: 0.8 }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Results Section */}
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.875rem', lg: '2.25rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                }}
              >
                Results
              </Typography>
              <Typography sx={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                The final product saw a 40% increase in user engagement within the first quarter. More importantly, accessibility testing scores jumped by 35%, proving that "beautiful" and "inclusive" are not mutually exclusive.
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Sidebar */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Project Info Card */}
              <Paper
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)' : 1,
                }}
              >
                <Typography sx={{ mb: 3, color: 'text.primary', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                  Project Info
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                      Role
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {project.role}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                      Duration
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {project.duration}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                      Client
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {project.client}
                    </Typography>
                  </Box>
                  <Box sx={{ pt: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        py: 2,
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                      startIcon={<OpenInNew />}
                    >
                      Visit Live Site
                    </Button>
                  </Box>
                </Box>
              </Paper>

              {/* Tech Stack Card */}
              <Paper
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)' : 1,
                }}
              >
                <Typography sx={{ mb: 3, color: 'text.primary', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                  Tech Stack
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {project.techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        bgcolor: 'background.default',
                        color: 'text.secondary',
                        borderRadius: 5,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        border: '1px solid',
                        borderColor: 'divider',
                        px: 2,
                      }}
                    />
                  ))}
                </Box>
              </Paper>

              {/* Quote Card */}
              <Paper
                sx={{
                  bgcolor: 'primary.main',
                  opacity: 0.1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <FormatQuote sx={{ color: 'primary.main', fontSize: 48, mb: 2 }} />
                <Typography sx={{ color: 'text.primary', fontStyle: 'italic', lineHeight: 1.6, mb: 3, fontSize: '1.125rem' }}>
                  "{project.quote.text}"
                </Typography>
                <Typography sx={{ color: 'text.primary', fontWeight: 700 }}>
                  {project.quote.author}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  {project.quote.position}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectDetail;
