import React from 'react';
import Nav from './components/navber';
import Hero from './components/hero';
import Analytics from './components/Analytics';
import News from './components/Newletter';
import Cards from './components/cards';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Analytics />
      <News />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
