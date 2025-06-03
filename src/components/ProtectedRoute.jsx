import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Loader from './loader';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loader />;
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;