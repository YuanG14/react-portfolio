import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
=======
>>>>>>> 92967a48d10f83cfcb6df8a2c02e58f3c89c54bc
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#18181b',
            border: '1px solid rgba(255,255,255,0.09)',
            color: '#fafafa',
          },
        }}
      />
    </BrowserRouter>
=======
    <App />
>>>>>>> 92967a48d10f83cfcb6df8a2c02e58f3c89c54bc
  </StrictMode>,
)
