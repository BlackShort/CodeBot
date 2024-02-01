import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChatContextProvider } from './Context/Context.jsx';

export const server = "https://codebot-703t.onrender.com/api/v1";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </React.StrictMode>,
)
