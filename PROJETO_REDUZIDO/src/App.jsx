import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <footer>
        <Footer />
      </footer >
    </BrowserRouter>
  );
}

export default App;
