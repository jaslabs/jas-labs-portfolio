import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import DomainStrip from './components/DomainStrip';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Stack from './components/Stack';
import Approach from './components/Approach';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <DomainStrip />
    <Capabilities />
    <Work />
    <Stack />
    <Approach />
    <Team />
    <Contact />
  </main>
);

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <div className="min-h-screen bg-ink-950 font-sans text-ink-50 antialiased">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
