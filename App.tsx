import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Lineup from './components/Lineup';
import VIP from './components/VIP';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Merch from './components/Merch';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-neonPink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Lineup />
        <VIP />
        <Gallery />
        <Testimonials />
        <Merch />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;