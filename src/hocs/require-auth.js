import { Navigate } from 'react-router-dom';

import useAuth from 'hooks/use-auth';

const requireAuth = BaseComponent => props => {
  const { logout, isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    logout();
    return <Navigate to="/signin" />;
  }

  return <BaseComponent {...props} />;
};

export default requireAuth;
