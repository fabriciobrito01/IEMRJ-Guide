import React from 'react';
import Header from './src/components/header.jsx';
import Footer from './src/components/footer.jsx';
import Begin from './src/components/begin.jsx';
import Map from './src/components/mapa.jsx';
import Teams from './src/components/times.jsx';

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
      <section id="times" style={{ height: 'auto'}}>
        <Teams />
      </section>
      <section id="contact" style={{ height: 'auto'}}>
      </section>
      <Footer />
    </div>
  );
}

export default App;
