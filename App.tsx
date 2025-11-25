import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Merch from './components/Merch';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-neonPink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Gallery />
        <Merch />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
