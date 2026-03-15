import { Navigate, useLocation } from 'react-router-dom'
import { isAdminLoggedIn } from '../auth/adminAuth'
import AdminLayout from './AdminLayout'

function ProtectedRoute() {
  const location = useLocation()

  if (!isAdminLoggedIn()) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <AdminLayout />
}

export default ProtectedRoute
