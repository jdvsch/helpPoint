import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isActivate }: { isActivate: boolean }) => {
  if (!isActivate) {
    return <Navigate to={''} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
