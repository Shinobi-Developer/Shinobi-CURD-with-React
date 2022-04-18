import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Toastr from 'components/toastr';
import SignIn from 'containers/signin';
import SignUp from 'containers/signup';
import Dashboard from 'containers/dashboard';
import NewPostRequest from 'containers/new-post-request';
import PendingPostRequests from 'containers/pending-post-requests';
import ChangePassword from 'containers/change-password';
import AddNewUser from 'containers/add-new-user';
import ManageUsers from 'containers/manage-users';
import useAuth from 'hooks/use-auth';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-post-request" element={<NewPostRequest />} />
          <Route path="pending-post-requests" element={<PendingPostRequests />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="add-new-user" element={<AddNewUser />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Routes>
        <Toastr />
      </BrowserRouter>
    </>
  );
};

export default App;
