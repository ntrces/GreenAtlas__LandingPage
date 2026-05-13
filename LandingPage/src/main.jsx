import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DownloadPage from './DownloadPage.jsx'
import DownloadTrigger from './DownloadTrigger.jsx'
import AnnouncementsPage from './AnnouncementsPage.jsx'

const path = window.location.pathname
let currentPage = <App />

if (path === '/download') {
  currentPage = <DownloadPage />
} else if (path === '/get-app') {
  currentPage = <DownloadTrigger />
} else if (path === '/announcements') {
  currentPage = <AnnouncementsPage />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {currentPage}
  </StrictMode>,
)
