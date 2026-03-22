import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { refreshAdminSession } from './auth/adminAuth'
import PlantManagementPage from './pages/tabs/Plant Management/PlantManagementPage.jsx'

await refreshAdminSession()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlantManagementPage />
    </BrowserRouter>
  </StrictMode>,
)
