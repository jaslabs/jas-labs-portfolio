import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Philosophy from './components/Philosophy';

const App: React.FC = () => {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Philosophy />
        <Services />
        <Showcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;