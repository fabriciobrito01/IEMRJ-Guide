import React from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import Begin from './src/components/begin.jsx';
import Map from './src/components/mapa.jsx';

function App() {
  return (
    <div>
      <Header />
      <section id="home" style={{ height: 'auto'}}>
        <Begin />
      </section>
      <section id="mapa" style={{ height: 'auto'}}>
        <Map />
      </section>
      <section id="services" style={{ height: 'auto'}}>
      </section>
      <section id="contact" style={{ height: 'auto'}}>
      </section>
      <Footer />
    </div>
  );
}

export default App;
