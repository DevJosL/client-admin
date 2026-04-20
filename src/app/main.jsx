import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style/index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter } from 'react-router-dom'

console.log("Comprobando Variables", import.meta.env.VITE_AUTH_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
