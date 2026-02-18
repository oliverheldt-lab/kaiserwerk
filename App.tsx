
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KaiserwerkInfo from './components/KaiserwerkInfo';
import ApartmentDetails from './components/ApartmentDetails';
import Gallery from './components/Gallery';
import Availability from './components/Availability';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="kaiserwerk">
          <KaiserwerkInfo />
        </section>
        <section id="details">
          <ApartmentDetails />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="availability" className="bg-white">
          <Availability />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
