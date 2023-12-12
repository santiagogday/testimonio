import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from './componentes/contador'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="titulo">Contador de Clicks</h1>
    <Contador />
  </React.StrictMode>,
);
