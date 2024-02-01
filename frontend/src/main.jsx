import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChatContextProvider } from './Context/Context.jsx';

export const API_URL = "https://codebot-703t.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </React.StrictMode>,
)
