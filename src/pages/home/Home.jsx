import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/sections/Hero'; 
import Stats from '../../components/sections/Stats'; 
import Services from '../../components/sections/Services';
import Technologies from '../../components/sections/Technologies';
import About from '../../components/sections/About';
import Testimonials from '../../components/sections/Testimonials';
import Footer from './../../components/sections/Footer';

export default function Home({ theme, toggleTheme }) {
  return (
    <main className="site-shell min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <Services />
      <Technologies />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}