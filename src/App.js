import React from 'react';
import Navbar from "./NavbarBoot";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home'
import HomeSection from './HomeSection';
import Hospital from './Hospital';
import HomeApp from './HomeApp';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Home />
    <HomeSection />
    <Hospital />
    <HomeApp />
    </div>
  );
}

export default App;
