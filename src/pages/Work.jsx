import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Chip,
  Card,
  CardMedia,
  Grid,
} from '@mui/material';
import {
  Search,
  FilterList,
  Autorenew,
  Inventory,
  Settings,
  AutoMode,
  Analytics,
  Storage,
  Security,
  DesignServices,
  Devices,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Work = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Design', 'DevOps'];

  const devopsSkills = [
    {
      icon: <Inventory />,
      title: 'Conteneurisation',
      technologies: 'Docker, Kubernetes, Harbor, Trivy',
    },
    {
      icon: <Settings />,
      title: 'Industrialisation',
      technologies: 'CI/CD, GitOps, Terraform, Ansible',
    },
    {
      icon: <AutoMode />,
      title: 'Orchestration & Automatisation',
      technologies: 'K8s, Helm, Istio, Auto-scaling',
    },
    {
      icon: <Analytics />,
      title: 'Observabilité',
      technologies: 'Prometheus, Grafana, ELK, Jaeger',
    },
    {
      icon: <Storage />,
      title: 'Database & Queue',
      technologies: 'PostgreSQL, MongoDB, RabbitMQ, Kafka',
    },
    {
      icon: <Security />,
      title: 'Sécurité & Administration',
      technologies: 'Vault, RBAC, LDAP, Falco',
    },
  ];

  const projects = [
    // === DESIGN PROJECTS ===
    {
      title: 'Eco-Friendly App',
      category: 'MOBILE',
      description: 'Sustainability tracker for urban commuters.',
      type: 'design',
      subcategory: 'UI/UX',
      aspectRatio: '4/3',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeLbVXOxc5xSARXru6m51AHTQO1HRsZ0SQ-qgx7aQX2QTwvKYOu-LaUG6S4UuOd0j9Fux8NHc_BxbISpyQ803n-i7cAvCGNcmV-P1trv8lXbVSK70pDlkxy_a8j04KHB38OM4QOu2issZsaBz_LxzXzpmUu7ogPG1OZmyrXJAA7n87B5Yfd9O6Jjp60fiBMkqMW5Lu2BpWlZLMuPdN2F6UIhaObfkqlugC6AYS8lIBSsODFsgfuq70B97ScUAjZ0JRefaBVoRLkk03',
    },
    {
      title: 'Web Dashboard',
      category: 'Enterprise Web App',
      description: 'Complexity simplified for data analysts.',
      type: 'design',
      subcategory: 'Web Design',
      aspectRatio: '3/4',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoh2X6E9zvoDalB-Nlz47hRI64nibUYVTAX85Lqatn72r4WE7I6OW8SXKz0azJsUrvptLyI6Ue2aRdvcE-N6FxIICVbMjHIr1Gmoyamq0jSXGBYm2efQ7zCaA8-5bhmKZ8pI2LM82c0gYWkiC624fLalfAvUXbQ6rCgo4uaD7rLyXGISsLtn7ahFQb6FlJSgetywh4f_cevHZfg0JQ0Ha1NevKyd7MwAuSLIMDGptdFE5iHNLKKJ-a-aYLa1NypyicNwyiX5-Af1Wu',
    },
    {
      title: 'Brand Identity',
      category: 'Visual Design',
      description: 'Crafting the voice of a tech startup.',
      type: 'design',
      subcategory: 'Branding',
      aspectRatio: '1/1',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIFlWVPVdtyQTH6ljMMrjPl_5R6Jm__iyvSVDB86XkF6-epHZEby5KiydhgqtSViptXoC607TfkO819nvTgLQB1r70knggIl0_wqaIbNoPqVDf4P-VQkMD4zwIG4pQuOvNJBCshmvxNrNeZhVdIJF9hypJaVn29DXMh-Z4Qmlaw0nZzT6fooHjgFJUN4GlnK4f_b-d6cehB_YxR_2S-n08wYI-_Wq2TEWVETeXZL7lGZQXrd2Fwf9202ET2AOzv_HtTNfryKniwIh3',
    },
    {
      title: 'Aura Commerce',
      category: 'E-commerce Design',
      description: 'Increasing conversion by 40% with UX.',
      type: 'design',
      subcategory: 'Web Design',
      aspectRatio: '16/9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4qhI1VsYXxnCe4dP96Hqh-YJJPRqqY9MlzuCyVmtUZJwrqup1zjg4vAY6p0iH7yIbCU4l-Mte2JM6cV5xDiSZrMnjUlR9bTsBkRJrcqxEcSXdf3q6QQezpqc3gEn9YMUJB5SvWm6xYeka87zz6t3j-M_1dLdeaOWZSF1LHi8mFjsDpcZYSej_c8xLDzenynakXRX4XvXO4z6UKyb9UJAKmOODgL96qYch0peAhDMaoy2mwm5cczprIsPGWhlo1s_OVIbOQaOomTwJ',
    },
    {
      title: 'Health Tracker',
      category: 'UI/UX Design',
      description: 'Connecting doctors and patients.',
      type: 'design',
      subcategory: 'Mobile',
      aspectRatio: '4/5',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWizWx9g6d2lcmtQhq6CqkgwCbh17AruFRC7ICmQ5a_3iQNSAZl4wlMLTz2_7q053inH0H_Y7FT7G3FsTRq_KcLT1YEbG91ywhXYope97bBBBT5sUAuYPflIvoErRF1lihgVi1xFw3flc8gBWnoqEd9_ToCn274544R-sOboaW2IzSBdzK7Cq7CyP-8Mg7sDw97_o-W6d6uIvZtCJ3oUHL1rKt-9i5pppo02QyzFv-nV-oz6t1vSkIwCJj5_Txz2q4CkJA1Yc0xfAB',
    },
    {
      title: 'Mobile Wallet',
      category: 'Fintech Solution',
      description: 'Securing assets with a friendly UI.',
      type: 'design',
      subcategory: 'Mobile',
      aspectRatio: '1/1',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuJK5mfxk-hF-_HZ21Du1ujh4biS-cxYCIh5_jdN6i2ZGNNbM2w_kqEWm_9eAs8S6aC4xqhHTEx67neRO4h8EOFzFeBzkSm2C7mtUrGumOmrAtjRuFJVNluCbJQdTvcx2j5FG9lh1-XmlTcCVEkzAW6XPC3o5qA42CPMiwSecekzw6urAFeanHfIVBCXHAt1BwbI6G7CU571PjFm1EHYpltPnQKw_k9-QmY_YeC7pwxggoKOtah656I8oOus8co68uoVKY-h4h3t6x',
    },

    // === DEVOPS PROJECTS ===
    {
      title: 'Kubernetes Production Cluster',
      category: 'Orchestration',
      description: 'Multi-cluster architecture with service mesh and auto-scaling policies.',
      type: 'devops',
      subcategory: 'Orchestration',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1667372393119-c31291c35e4b?w=800&q=80',
      stats: { clusters: '5', uptime: '99.9%' },
    },
    {
      title: 'CI/CD GitOps Pipeline',
      category: 'Industrialisation',
      description: 'Complete GitOps workflow with ArgoCD and Terraform for multi-cloud deployments.',
      type: 'devops',
      subcategory: 'Industrialisation',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      stats: { pipelines: 25, deployments: '5000+/mo' },
    },
    {
      title: 'Docker Microservices',
      category: 'Conteneurisation',
      description: 'Containerized microservices architecture with Compose and Swarm orchestration.',
      type: 'devops',
      subcategory: 'Conteneurisation',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
      stats: { services: 15, containers: '100+' },
    },
    {
      title: 'ELK Stack Monitoring',
      category: 'Observabilité',
      description: 'Centralized logging and monitoring with ELK Stack and custom Grafana dashboards.',
      type: 'devops',
      subcategory: 'Observabilité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      stats: { logs: '1TB/jour', dashboards: 45 },
    },
    {
      title: 'PostgreSQL HA Cluster',
      category: 'Database & Queue',
      description: 'High availability PostgreSQL setup with Patroni and Etcd for automatic failover.',
      type: 'devops',
      subcategory: 'Database',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      stats: { nodes: 3, replication: 'sync' },
    },
    {
      title: 'Vault Security Platform',
      category: 'Sécurité',
      description: 'Secrets management platform with Vault and dynamic credentials rotation.',
      type: 'devops',
      subcategory: 'Sécurité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      stats: { secrets: 500, policies: 50 },
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' ||
                         (activeFilter === 'Design' && project.type === 'design') ||
                         (activeFilter === 'DevOps' && project.type === 'devops');
    return matchesSearch && matchesFilter;
  });

  const getAspectRatioPadding = (ratio) => {
    const ratios = {
      '4/3': '75%',
      '3/4': '133.33%',
      '1/1': '100%',
      '16/9': '56.25%',
      '4/5': '125%',
    };
    return ratios[ratio] || '75%';
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, lg: 12 }, px: { xs: 3, lg: 8 } }}>
      {/* Page Heading Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 4, mb: 8 }}>
        <Box sx={{ maxWidth: 700 }}>
          <Typography
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: 2,
              mb: 1,
            }}
          >
            Portfolio Showcase
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              mb: 3,
            }}
          >
            Selected Projects
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '1.125rem',
              maxWidth: 500,
            }}
          >
            Design & DevOps projects showcasing functional minimalism and infrastructure excellence.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
          <FilterList />
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Sorted by: Newest First
          </Typography>
        </Box>
      </Box>

      {/* DevOps Skills Section */}
      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
          }}
        >
          DevOps Expertise
        </Typography>
        <Grid container spacing={3}>
          {devopsSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component={motion.div}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 3,
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {skill.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  {skill.technologies}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Search and Filter Controls */}
      <Box sx={{ mb: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, alignItems: 'center' }}>
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ position: 'absolute', left: 3, top: '50%', transform: 'translateY(-50%)', color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
                <Search />
              </Box>
              <TextField
                fullWidth
                placeholder="Search by project name or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    pl: 5,
                    height: 56,
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                    '&.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                        borderWidth: 2,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'contained' : 'outlined'}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  bgcolor: activeFilter === filter ? 'primary.main' : 'background.paper',
                  color: activeFilter === filter ? 'white' : 'text.secondary',
                  border: activeFilter === filter ? 'none' : '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    bgcolor: activeFilter === filter ? 'primary.dark' : 'primary.main',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Project Grid (Masonry-like Style) */}
      <Box
        sx={{
          columnCount: { xs: 1, md: 2, lg: 3 },
          columnGap: 3,
        }}
      >
        {filteredProjects.map((project, index) => (
          <Box
            key={index}
            sx={{
              breakInside: 'avoid',
              mb: 3,
            }}
          >
            <Link to={`/project/${index}`} style={{ textDecoration: 'none', display: 'block' }}>
              <Card
                sx={{
                  position: 'relative',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: 1,
                  transition: 'all 0.5s',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 20,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', pt: getAspectRatioPadding(project.aspectRatio) }}>
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
                      transition: 'transform 0.7s',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                    <Chip
                      label={project.type === 'devops' ? 'DevOps' : 'Design'}
                      size="small"
                      sx={{
                        bgcolor: project.type === 'devops' ? 'secondary.main' : 'background.default',
                        color: project.type === 'devops' ? 'white' : 'text.secondary',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', mb: 2 }}>
                    {project.description}
                  </Typography>

                  {/* Stats for DevOps projects */}
                  {project.stats && (
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 3,
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {Object.entries(project.stats).map(([key, value]) => (
                        <Box key={key}>
                          <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', textTransform: 'uppercase' }}>
                            {key}
                          </Typography>
                          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'primary.main' }}>
                            {value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {!project.stats && (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'divider' }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'divider' }} />
                    </Box>
                  )}
                </Box>

                {/* Hover Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'primary.main',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 0,
                    transform: 'translateY(16px)',
                    transition: 'all 0.3s',
                    pointerEvents: 'none',
                  }}
                >
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 600, mb: 1 }}>
                    {project.type === 'devops' ? 'Infrastructure' : 'Case Study'}
                  </Typography>
                  <Typography sx={{ color: 'white', fontSize: '1.25rem', fontWeight: 900, mb: 2, lineHeight: 1.2 }}>
                    {project.title}
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      width: 'fit-content',
                      '&:hover': {
                        bgcolor: 'background.default',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Link>
          </Box>
        ))}
      </Box>

      {/* Load More Section */}
      <Box sx={{ mt: 15, textAlign: 'center' }}>
        <Button
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 5,
            py: 2,
            bgcolor: 'background.paper',
            border: 2,
            borderColor: 'primary.main',
            borderRadius: 3,
            color: 'primary.main',
            fontWeight: 800,
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white',
            },
          }}
        >
          <Autorenew />
          Load More Projects
        </Button>
        <Typography sx={{ mt: 3, color: 'text.secondary', fontSize: '0.875rem', fontWeight: 500 }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </Typography>
      </Box>
    </Container>
  );
};

export default Work;
