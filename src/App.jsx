import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function MainLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
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
