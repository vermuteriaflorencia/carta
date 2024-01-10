import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <link href="https://db.onlinewebfonts.com/c/b4d584ed0e53ba94a815f817690faab2?family=Brittany+Signature" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/antic-didone" rel="stylesheet"></link>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
      <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7vT9TqFx1VFKDzAM3S2W44J9suEP970g&callback=console.debug&libraries=maps,marker&v=beta">
    </script>
      <title>Vermuteria Florencia - Carta</title>
    </Helmet>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
