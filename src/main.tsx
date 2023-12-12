import React from 'react'
import ReactDOM from 'react-dom/client'
import Testimonio from './componentes/testimonio'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="titulo">Testimonio de Personas</h1>
    <Testimonio
    link='https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp'
    foto='Juan'
    texto='Hola mi nombre es Juan' />
    <Testimonio
    link='https://cdn.pixabay.com/photo/2023/02/24/07/40/spiderman-7810368_640.png'
    foto='Hombre Araña'
    texto='Hola soy el Hombre Araña y me gusta el parkour' />
  </React.StrictMode>,
);
