import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { APIProvider } from './contexts/APIContext';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>,
);
