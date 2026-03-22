import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DownloadPage from './DownloadPage.jsx'

const path = window.location.pathname
const currentPage = path === '/download' ? <DownloadPage /> : <App />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {currentPage}
  </StrictMode>,
)
