import { Navigate, Route, Routes } from 'react-router-dom'
import { isAdminLoggedIn } from './auth/adminAuth'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import AnalyticsReportsPage from './pages/tabs/Analytics/AnalyticsReportsPage'
import AuditLogsPage from './pages/tabs/AuditLogs/AuditLogsPage'
import DashboardPage from './pages/tabs/Dashboard/DashboardPage'
import FieldObservationRecordsPage from './pages/tabs/FieldRecords/FieldObservationRecordsPage'
import MeetingsPage from './pages/tabs/Meetings/MeetingsPage'
import PlantManagementPage from './pages/tabs/Plant Management/PlantManagementPage'
import UserManagementPage from './pages/tabs/UserManagement/UserManagementPage'
import ValidationPage from './pages/tabs/Validation/ValidationPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="analytics-reports" element={<AnalyticsReportsPage />} />
        <Route path="validation" element={<ValidationPage />} />
        <Route path="field-observation-records" element={<FieldObservationRecordsPage />} />
        <Route path="plant-management" element={<PlantManagementPage />} />
        <Route path="meetings" element={<MeetingsPage />} />
        <Route path="audit-logs" element={<AuditLogsPage />} />
        <Route path="user-management" element={<UserManagementPage />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={isAdminLoggedIn() ? '/dashboard' : '/login'} replace />}
      />
    </Routes>
  )
}

export default App
