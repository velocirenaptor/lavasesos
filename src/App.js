import React from 'react';
import Menu from './components/Menu';
import Eventos from './pages/Eventos';
import Registros from './pages/Registros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home> <Eventos /> </Home> } />
          <Route path="/eventos" element={<Home> <Eventos /> </Home>} />
          <Route path="/registros" element={<Home> <Registros /> </Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

export default App;

