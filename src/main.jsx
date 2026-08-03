import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0b1120',
            border: '1px solid rgba(148,163,184,0.14)',
            color: '#f8fafc',
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)
