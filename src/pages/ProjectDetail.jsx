import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import {
  ArrowBack,
  OpenInNew,
  Code,
  Description,
  Storage,
  Cloud,
  Security
} from '@mui/icons-material';

// Import projects from Work page
const projects = [
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
    features: [
      'Configuration SSO avec Keycloak et OpenID Connect',
      'Intégration Kubernetes pour applications cloud-native',
      'Gestion centralisée des identités et accès',
      'Support multi-facteur d\'authentification',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Gestion des secrets avec HashiCorp Vault',
      'Kubernetes External Secrets Operator',
      'Rotation automatique des credentials',
      'Sécurité renforcée des applications',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Pipeline CI/CD avec Maven et SonarQube',
      'Déploiement GitOps avec ArgoCD',
      'Charts Helm pour Kubernetes',
      'Qualité de code intégrée',
      'Multi-environnement (dev, staging, prod)',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Distributed tracing avec Tempo',
      'Collecteur de traces avec Alloy',
      'Visualisation dans Grafana',
      'Corrélation des requêtes microservices',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Centralisation des logs avec Loki',
      'Métriques avec Prometheus',
      'Dashboards Grafana personnalisés',
      'Alerting et notifications',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Métriques système avec Node Exporter',
      'Dashboards Grafana personnalisés',
      'Alertes sur seuils critiques',
      'Monitoring CPU, mémoire, disque, réseau',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Infrastructure as Code avec Terraform',
      'Provisioning KVM automatisé',
      'Gestion état infrastructure',
      'Reproduction facile des environnements',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Automatisation EC2 avec Lambda',
      'Planning arrêt/démarrage',
      'Optimisation coûts AWS',
      'EventBridge pour scheduling',
    ],
    role: 'Cloud Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Service Discovery avec Consul',
      'Health checking automatique',
      'Configuration distribuée',
      'Load balancing intégré',
    ],
    role: 'DevOps Engineer',
    duration: '2024 - Présent',
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
    features: [
      'Architecture microservices Spring Boot 3',
      'Event-driven avec Kafka',
      'Authentification Keycloak',
      'Distributed tracing avec Zipkin',
      'Conteneurisation Docker',
    ],
    role: 'Full Stack Developer',
    duration: '2025 - Présent',
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
    features: [
      'Expo SDK 54 avec React 19.1',
      'Expo Router v6 pour navigation',
      'Redux Toolkit pour state management',
      'TypeScript pour type safety',
      'Optimisé iOS, Android et Web',
    ],
    role: 'Mobile Developer',
    duration: '2025 - Présent',
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
    features: [
      'API REST Spring Boot',
      'Architecture layerée (Controller, Service, Repository)',
      'Persistance des données JPA',
      'Gestion réservations et clients',
    ],
    role: 'Backend Developer',
    duration: '2025 - Présent',
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
    features: [
      'Framework Laravel PHP',
      'Base de données MySQL',
      'Templates Blade',
      'Authentification intégrée',
      'CRUD complet chambres, réservations',
    ],
    role: 'Full Stack Developer',
    duration: '2025 - Présent',
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
    features: [
      'Backend Laravel 9',
      'Frontend Vue.js',
      'Intégration paiement Stripe',
      'Gestion panier et commandes',
      'Admin dashboard complet',
    ],
    role: 'Full Stack Developer',
    duration: '2023 - Présent',
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
    features: [
      'API RESTful Laravel',
      'Endpoints CRUD complets',
      'Authentification JWT',
      'Validation des données',
      'Documentation Postman/Swagger',
    ],
    role: 'Backend Developer',
    duration: '2024 - Présent',
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
    features: [
      'Authentification Laravel Sanctum',
      'Support SPA et mobile',
      'Token-based API',
      'Permissions et rôles',
      'Middlewares personnalisés',
    ],
    role: 'Backend Developer',
    duration: '2024 - Présent',
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
    features: [
      'API REST pour e-commerce',
      'Gestion catalogue produits',
      'Commandes et paiements',
      'Authentification utilisateurs',
    ],
    role: 'Backend Developer',
    duration: '2025 - Présent',
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
    features: [
      'App mobile React Native Expo',
      'Intégration API Pokémon',
      'Liste et détails Pokémon',
      'Recherche et filtrage',
      'Interface responsive',
    ],
    role: 'Mobile Developer',
    duration: '2025 - Présent',
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
    features: [
      'Single Page Application Angular',
      'TypeScript pour type safety',
      'Routing Angular',
      'Design moderne et responsive',
      'Présentation projets et CV',
    ],
    role: 'Frontend Developer',
    duration: '2023 - Présent',
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
    features: [
      'Gestion conteneurs Docker avec SSH',
      'Création et suppression automatisée',
      'Affichage IP des conteneurs',
      'Script Bash automatisé',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Déploiement avec rsync',
      'Automatisation CI/CD',
      'Sync fichiers avec serveur',
      'Scripts shell personnalisés',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Reverse proxy Nginx',
      'Conteneurisation Docker',
      'Configuration SSL/Let\'s Encrypt',
      'Domain name configuration',
    ],
    role: 'DevOps Engineer',
    duration: '2024 - Présent',
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
    features: [
      'Analyse performance serveur',
      'Métriques CPU, mémoire, disque, réseau',
      'Génération rapports',
      'Alertes sur seuils',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
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
    features: [
      'Automatisation commandes Git',
      'Alias personnalisés',
      'Workflows automatisés',
      'Gain de productivité',
    ],
    role: 'DevOps Engineer',
    duration: '2025 - Présent',
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <Container maxWidth="xl" sx={{ py: 16, px: { xs: 3, lg: 6 } }}>
        <Typography variant="h4" align="center">
          Project not found
        </Typography>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" component={Link} to="/work">
            Back to Projects
          </Button>
        </Box>
      </Container>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Sécurité': return <Security />;
      case 'Infrastructure': return <Storage />;
      case 'Cloud': return <Cloud />;
      default: return <Code />;
    }
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

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Chip
              label={project.type === 'devops' ? 'DevOps' : 'Full Stack'}
              sx={{
                bgcolor: project.type === 'devops' ? 'secondary.main' : 'success.main',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.75rem',
              }}
            />
            <Chip
              label={project.subcategory}
              sx={{
                bgcolor: 'background.default',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          </Box>

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
            {project.title}
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
            {/* Features Section */}
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
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 0 }}>
                {project.features?.map((feature, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      mb: 3,
                      fontSize: '1.125rem',
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        mt: '8px',
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Technical Approach */}
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
                Technical Approach
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                Ce projet utilise une architecture moderne suivant les best practices de l'industrie. Le code est
                structuré de manière modulaire pour faciliter la maintenance et l'évolutivité.
              </Typography>
              <Typography sx={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'text.secondary' }}>
                L'accent est mis sur la qualité du code, les tests automatisés, la documentation et les pratiques
                DevOps pour garantir un produit fiable et maintenable.
              </Typography>
            </Box>

            {/* Screenshots/Video placeholder */}
            <Box sx={{ mb: 8 }}>
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
                Project Gallery
              </Typography>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '2px dashed',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: 8,
                  textAlign: 'center',
                }}
              >
                <Description sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                  Screenshots and videos coming soon
                </Typography>
                <Typography sx={{ color: 'text.disabled', fontSize: '0.875rem' }}>
                  Check the GitHub repository for more details
                </Typography>
              </Box>
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
                      Category
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {project.category}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                      Type
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {project.type === 'devops' ? 'DevOps / Cloud' : 'Full Stack'}
                    </Typography>
                  </Box>
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
                  <Divider />
                  <Box sx={{ pt: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        py: 2,
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      }}
                      startIcon={<OpenInNew />}
                    >
                      View on GitHub
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
                  {project.tech?.map((tech, index) => (
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectDetail;
