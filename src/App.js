import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/index';
import Sobre from './components/Sobre/index';
import Skills from './components/Skills/index';
import Projetos from './components/Projetos/index';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

