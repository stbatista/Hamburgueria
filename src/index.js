import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import Cardapio from './pages/Cardapio' 
import Acais from './pages/Acais' 
import Combos from './pages/Combos' 
import Edit from './pages/Edit' 
import NoPage from './pages/NoPage' 
import './index.css';
import './components/components.css';

export default function App () {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Cardapio />}></Route>
            <Route path="acais" element={<Acais />}></Route>
            <Route path="combos" element={<Combos />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
          <Route path="edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);