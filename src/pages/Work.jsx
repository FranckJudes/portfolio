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

  const filters = ['All', 'Kairos', 'DevOps', 'Full Stack', 'Infrastructure'];

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
    // === KAIROS PROJECTS (Private - Demo Available) ===
    {
      title: 'KAIROS-HARMONI',
      category: 'Business Process Management',
      description: 'Application de gestion d\'entreprise avec BPMN, diagrammes interactifs, Gantt, éditeur riche Tiptap. Dashboard analytics avec graphiques dynamiques et gestion de workflows.',
      type: 'kairos',
      subcategory: 'Full Stack',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      isPrivate: true,
      hasDemo: true,
      tech: ['React 19', 'Spring Boot', 'BPMN', 'Docker', 'Charts', 'Gantt', 'Tiptap', 'WebSocket'],
    },
    {
      title: 'KAIROS-ESIGN',
      category: 'Electronic Signature',
      description: 'Plateforme de signature électronique avec drag-and-drop, visualisation PDF, gestion de documents et éditeur visuel. Intégration complète pour flux de signature.',
      type: 'kairos',
      subcategory: 'Full Stack',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1557992260-ec58e38d363c?w=800&q=80',
      isPrivate: true,
      hasDemo: true,
      tech: ['React 18', 'Spring Boot', 'Docker', 'Jenkins', 'PDF', 'Drag-Drop', 'TypeScript'],
    },
    {
      title: 'Kairos-KM-Stable',
      category: 'Knowledge Management',
      description: 'Système de gestion des connaissances avec authentification LDAP, génération PDF, WebSockets temps réel. Gestion documentaire avec recherche et organisation hiérarchique.',
      type: 'kairos',
      subcategory: 'Full Stack',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      isPrivate: true,
      hasDemo: true,
      tech: ['Laravel 9', 'PHP 8', 'Docker', 'MySQL', 'LDAP', 'WebSocket', 'PDF', 'SaaS'],
    },

    // === DEVOPS & CLOUD PROJECTS ===
    {
      title: 'Keycloak SSO Kubernetes OIDC',
      category: 'Identity & Access Management',
      description: 'Single Sign-On avec Keycloak, OpenID Connect et Kubernetes. Configuration complète de l\'authentification centralisée pour les applications cloud-native.',
      type: 'devops',
      subcategory: 'Sécurité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/keycloak-sso-kubernetes-oidc',
      tech: ['Keycloak', 'Kubernetes', 'OIDC', 'SSO'],
    },
    {
      title: 'Vault External Secrets K8s',
      category: 'Secrets Management',
      description: 'Intégration de HashiCorp Vault avec Kubernetes External Secrets Operator pour la gestion sécurisée des credentials et rotation automatique.',
      type: 'devops',
      subcategory: 'Sécurité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/vault-kubernetes-external-secrets',
      tech: ['Vault', 'Kubernetes', 'External Secrets'],
    },
    {
      title: 'ArgoCD Helm CI/CD Pipeline',
      category: 'GitOps & CI/CD',
      description: 'Pipeline GitOps complet avec Maven, SonarQube, ArgoCD et Helm. Déploiement automatisé sur Kubernetes avec qualité de code intégrée.',
      type: 'devops',
      subcategory: 'Industrialisation',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1667372393119-c31291c35e4b?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/project-maven-sonar-argocd-helm-k8s',
      tech: ['ArgoCD', 'Helm', 'Maven', 'SonarQube', 'GitOps'],
    },
    {
      title: 'Grafana Tempo Distributed Tracing',
      category: 'Observabilité',
      description: 'Architecture de tracing distribué avec Tempo, Alloy et Grafana. Visualisation des requêtes à travers les microservices pour debugging performant.',
      type: 'devops',
      subcategory: 'Observabilité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/tempo-alloy-grafana-distributed-tracing-kubernetes',
      tech: ['Grafana Tempo', 'Alloy', 'Kubernetes', 'Tracing'],
    },
    {
      title: 'Loki Prometheus Monitoring',
      category: 'Logging & Monitoring',
      description: 'Stack de monitoring complet avec Loki pour les logs, Prometheus pour les métriques et Grafana pour la visualisation sur Kubernetes.',
      type: 'devops',
      subcategory: 'Observabilité',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/loki-prometheus-grafana-kubernetes-logging-monitoring',
      tech: ['Loki', 'Prometheus', 'Grafana', 'Kubernetes'],
    },
    {
      title: 'Prometheus Grafana Node Exporter',
      category: 'Monitoring',
      description: 'Surveillance des métriques système via Node Exporter avec dashboards Grafana personnalisés pour monitoring infrastructure.',
      type: 'devops',
      subcategory: 'Observabilité',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/prometheus_grafana',
      tech: ['Prometheus', 'Grafana', 'Node Exporter', 'Shell'],
    },
    {
      title: 'Terraform KVM Infrastructure',
      category: 'Infrastructure as Code',
      description: 'Déploiement automatisé de machines virtuelles KVM avec Terraform. Provisionning infrastructure en tant que code.',
      type: 'devops',
      subcategory: 'Infrastructure',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1667372393119-c31291c35e4b?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/KVM-with-Terraform',
      tech: ['Terraform', 'KVM', 'HCL', 'IaC'],
    },
    {
      title: 'AWS Lambda EC2 Auto Start/Stop',
      category: 'Cloud Automation',
      description: 'Fonction Lambda AWS pour automatiser l\'arrêt et démarrage des instances EC2 selon un planning. Optimisation des coûts cloud.',
      type: 'devops',
      subcategory: 'Cloud',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/lambda_stop_start_EC2_aws',
      tech: ['AWS Lambda', 'EC2', 'Terraform', 'Python'],
    },
    {
      title: 'Consul Service Discovery',
      category: 'Service Mesh',
      description: 'Implementation de Consul pour le service discovery, configuration distribuée et health checking des microservices.',
      type: 'devops',
      subcategory: 'Orchestration',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Consul-Learning',
      tech: ['Consul', 'Service Discovery', 'HashiCorp'],
    },

    // === FULL STACK PROJECTS ===
    {
      title: 'E-Commerce Spring Boot 3',
      category: 'Microservices Architecture',
      description: 'Application e-commerce complète avec Spring Boot 3, Docker, Keycloak, Kafka pour events, Zipkin pour tracing. Architecture microservices.',
      type: 'fullstack',
      subcategory: 'Backend',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/E-Commerce-Sprint-Boot-3',
      tech: ['Spring Boot 3', 'Docker', 'Kafka', 'Keycloak', 'Zipkin', 'Java'],
    },
    {
      title: 'React Native Boilerplate',
      category: 'Mobile Development',
      description: 'Boilerplate production-ready React Native avec Expo SDK 54, React 19.1, Expo Router v6, Redux Toolkit, TypeScript. Optimisé pour le développement moderne.',
      type: 'fullstack',
      subcategory: 'Frontend Mobile',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/react-native-boilerplate',
      tech: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'React 19'],
    },
    {
      title: 'Hotel Management Spring Boot',
      category: 'Backend Application',
      description: 'Système de gestion hôtelière avec Spring Boot, REST API, persistance des données et architecture layerée.',
      type: 'fullstack',
      subcategory: 'Backend',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Hotel-Backend',
      tech: ['Spring Boot', 'Java', 'REST API', 'Backend'],
    },
    {
      title: 'Hotel Version Laravel',
      category: 'Full Stack Web',
      description: 'Application de gestion d\'hôtel avec Laravel PHP, MySQL, Blade templates. CRUD complet avec authentification.',
      type: 'fullstack',
      subcategory: 'Full Stack',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Hotel-Version-Laravel',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    },
    {
      title: 'E-Commerce Laravel Vue.js',
      category: 'Full Stack Application',
      description: 'Plateforme e-commerce avec Laravel 9 backend et Vue.js frontend. Intégration paiement, gestion panier, admin dashboard.',
      type: 'fullstack',
      subcategory: 'Full Stack',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/E-Commerce',
      tech: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'JavaScript'],
    },
    {
      title: 'REST API Laravel MySQL',
      category: 'Backend API',
      description: 'API RESTful complète avec Laravel et MySQL. CRUD endpoints, authentification, validation, documentation API.',
      type: 'fullstack',
      subcategory: 'Backend',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/API_RESTFful_laravel_mysql',
      tech: ['Laravel', 'REST API', 'MySQL', 'PHP'],
    },
    {
      title: 'Laravel Sanctum API Complete',
      category: 'Authentication API',
      description: 'API complète avec Laravel Sanctum pour authentification SPA, mobile, et token-based. CRUD avec permissions et middlewares.',
      type: 'fullstack',
      subcategory: 'Backend',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/sanctum_api_complet',
      tech: ['Laravel Sanctum', 'REST API', 'Auth', 'PHP'],
    },
    {
      title: 'Shoes E-commerce Backend',
      category: 'Backend Development',
      description: 'Backend pour application e-commerce de chaussures. API REST, gestion produits, commandes et utilisateurs.',
      type: 'fullstack',
      subcategory: 'Backend',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/shoes-backend',
      tech: ['PHP', 'Backend', 'REST API'],
    },
    {
      title: 'Pokemon App React Native',
      category: 'Mobile Application',
      description: 'Application mobile simple pour Pokémon avec React Native et Expo. Liste, détails et recherche de Pokémon.',
      type: 'fullstack',
      subcategory: 'Frontend Mobile',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Simple-APP-mobile-Pokemon',
      tech: ['React Native', 'Expo', 'TypeScript', 'API'],
    },
    {
      title: 'Angular CV Portfolio',
      category: 'Frontend Web',
      description: 'Portfolio web interactif développé avec Angular. Présentation CV et projets avec design moderne.',
      type: 'fullstack',
      subcategory: 'Frontend',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/CV-6-Angular',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },

    // === INFRASTRUCTURE & SCRIPTING ===
    {
      title: 'Docker Containers SSH Manager',
      category: 'DevOps Tools',
      description: 'Script Bash pour gérer des conteneurs Docker exécutant SSH. Création, suppression et affichage IP des conteneurs.',
      type: 'devops',
      subcategory: 'DevOps Tools',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Gestion-de-Conteneurs-Docker-avec-SSH',
      tech: ['Docker', 'Bash', 'Shell', 'SSH'],
    },
    {
      title: 'Static Site Deployment',
      category: 'DevOps Automation',
      description: 'Déploiement de sites statiques avec rsync sur serveur. Automatisation du déploiement CI/CD pour sites web.',
      type: 'devops',
      subcategory: 'DevOps Tools',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Static-Site-Server',
      tech: ['rsync', 'Shell', 'Deployment', 'CI/CD'],
    },
    {
      title: 'Nginx Docker Domain Deployment',
      category: 'Web Infrastructure',
      description: 'Déploiement de site web avec Nginx, Docker et configuration nom de domaine distant. Reverse proxy et SSL.',
      type: 'devops',
      subcategory: 'Infrastructure',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Deploy-website-with-Nginx-Docker-and-remote-domain-name',
      tech: ['Nginx', 'Docker', 'SSL', 'Deployment'],
    },
    {
      title: 'Server Performance Analyzer',
      category: 'Monitoring Tools',
      description: 'Script d\'analyse des statistiques de performance serveur. CPU, mémoire, disque, réseau avec génération de rapports.',
      type: 'devops',
      subcategory: 'DevOps Tools',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/Server-Performance-Stats',
      tech: ['Shell', 'Monitoring', 'Performance', 'Linux'],
    },
    {
      title: 'Git Automation Helper',
      category: 'DevOps Tools',
      description: 'Script pour automatiser les commandes Git courantes. Alias, workflows automatisés et raccourcis pour productivité.',
      type: 'devops',
      subcategory: 'DevOps Tools',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      githubUrl: 'https://github.com/FranckJudes/git-help',
      tech: ['Git', 'Shell', 'Automation', 'DevOps'],
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (project.tech && project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesFilter = activeFilter === 'All' ||
                         (activeFilter === 'Kairos' && project.type === 'kairos') ||
                         (activeFilter === 'DevOps' && project.type === 'devops') ||
                         (activeFilter === 'Full Stack' && project.type === 'fullstack') ||
                         (activeFilter === 'Infrastructure' && (project.subcategory === 'Infrastructure' || project.subcategory === 'DevOps Tools' || project.subcategory === 'Cloud' || project.subcategory === 'Orchestration'));
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
            Full Stack & DevOps projets GitHub : Kubernetes, Docker, Spring Boot, Laravel, React Native, CI/CD, et plus encore.
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
                      flexWrap: 'wrap',
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
                      label={project.type === 'devops' ? 'DevOps' : project.type === 'fullstack' ? 'Full Stack' : project.type === 'kairos' ? 'Kairos' : 'Project'}
                      size="small"
                      sx={{
                        bgcolor: project.type === 'devops' ? 'secondary.main' : project.type === 'fullstack' ? 'success.main' : project.type === 'kairos' ? '#E91E63' : 'background.default',
                        color: project.type === 'devops' || project.type === 'fullstack' || project.type === 'kairos' ? 'white' : 'text.secondary',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                      }}
                    />
                    {project.isPrivate && (
                      <Chip
                        label="PRIVATE"
                        size="small"
                        sx={{
                          bgcolor: 'warning.main',
                          color: 'white',
                          fontWeight: 900,
                          fontSize: '0.7rem',
                          letterSpacing: 1,
                        }}
                      />
                    )}
                    {project.hasDemo && (
                      <Chip
                        label="DEMO"
                        size="small"
                        sx={{
                          bgcolor: 'success.dark',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
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

                  {/* Tech Stack */}
                  {project.tech && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'background.default',
                            color: 'text.secondary',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  {!project.tech && (
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
                    {project.type === 'devops' ? 'Infrastructure & Cloud' : project.type === 'fullstack' ? 'Full Stack Application' : 'Project'}
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
                    View on GitHub
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
          component="a"
          href="https://github.com/FranckJudes?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
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
            textDecoration: 'none',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white',
            },
          }}
        >
          <Autorenew />
          View All Projects on GitHub
        </Button>
        <Typography sx={{ mt: 3, color: 'text.secondary', fontSize: '0.875rem', fontWeight: 500 }}>
          Showing {filteredProjects.length} of {projects.length} selected projects • 96+ projects on GitHub
        </Typography>
      </Box>
    </Container>
  );
};

export default Work;
