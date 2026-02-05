import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Showcase from './components/Showcase';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Philosophy from './components/Philosophy';
import ProjectsPage from './pages/ProjectsPage';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <TechStack />
      <Philosophy />
      <Services />
      <Showcase />
      <Team />
      <Process />
      <Contact />
    </main>
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-navy-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;