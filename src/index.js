import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> se removio para que el useeffect se ejecutara una vez
    <App />
  // </React.StrictMode>
);

