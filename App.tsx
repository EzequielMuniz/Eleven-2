
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import ResultsGallery from './components/ResultsGallery';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <ProcessSection />
        <ResultsGallery />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
