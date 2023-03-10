import React from 'react';
import ReactDOM from 'react-dom/client';
// añadimos bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Los estilos propios deben ir debajo del bootrap para que no los pise.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';
import AppRoutingTarea from './AppRoutingTarea';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne></AppRoutingOne>  */}
    {/* <AppRoutingFinal></AppRoutingFinal> */}
    {/* <AppRoutingTarea></AppRoutingTarea> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
