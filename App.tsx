import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;