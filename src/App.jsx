import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundFX, ScrollProgress } from './components/ui';

function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Decorative animated backdrop & reading progress */}
      <BackgroundFX />
      <ScrollProgress />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Featured Projects Section */}
        <Projects />

        {/* 4. Skills & Coursework Section */}
        <Skills />

        {/* 5. Education, Achievements & Leadership */}
        <Education />

        {/* 6. Contact & Message Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
