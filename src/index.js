import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { App } from './App'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// function Componente({ titulo , children }){

//   // const titulo = props.titulo;
//   // const contenido = props.contenido;

//   // const { titulo , contenido} = props;
//   // return (
//   // <div className='contenedor'>
//   //   <h1>{titulo}</h1>
//   //   <div>{children}</div>
//   // </div>

// );
//}