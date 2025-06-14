import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // que já importa AppRoutes
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
     <Analytics />
     <SpeedInsights debug={true} />
  </React.StrictMode>
);
