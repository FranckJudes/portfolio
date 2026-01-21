import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CustomThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<PageTransition variant="slideUp"><Home /></PageTransition>} />
              <Route path="/work" element={<PageTransition variant="slideUp"><Work /></PageTransition>} />
              <Route path="/about" element={<PageTransition variant="slideUp"><About /></PageTransition>} />
              <Route path="/project/:projectId" element={<PageTransition variant="fade"><ProjectDetail /></PageTransition>} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
