import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import Begin from './src/components/begin.jsx';
import Map from './src/components/mapa.jsx';
import Teams from './src/components/times.jsx';
import SchedulePage from './src/components/programacao.jsx';
import Services from './src/components/servicos.jsx';
import FAQ from './src/components/faq.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home" style={{ height: 'auto' }}>
                <Begin />
              </section>
              <section id="Map" style={{ height: 'auto' }}>
                <Map />
              </section>
              <section id="teams" style={{ height: 'auto' }}>
                <Teams />
              </section>
              <section id="schedule" style={{ height: 'auto' }}>
                <SchedulePage />
              </section>
              <section id="services" style={{ height: 'auto' }}>
                <Services />
              </section>
            </>
          }
        />
        <Route path="faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
