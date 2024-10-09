import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './composants/Layout.js';
import Home from './composants/pages/Home.js';
import About from './composants/pages/Apropos.js';
import NotFound from './composants/pages/NotFound.js';
import Logement from './composants/pages/Logement.js';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
        < Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
