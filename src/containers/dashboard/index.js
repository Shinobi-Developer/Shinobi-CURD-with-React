import React from 'react';
import { useNavigate } from 'react-router-dom';

import requireAuth from 'hocs/require-auth';
import { Header, UserInfo, Container, Container2, Title, StyledBtn, LogoutBtn } from './styled';
import useAuth from 'hooks/use-auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout, getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());

  const handleLogOut = () => {
    logout();
    navigate('/signin');
  };

  return (
    <>
      <Header>
        <div className="spacer"></div>
        <UserInfo>Logged in as: {currentUser.userID}</UserInfo>
      </Header>
      <Container>
        <Container2>
          <Title>{currentUser.role === 1 ? 'Dashboard' : 'Admin Dashboard'}</Title>
          <StyledBtn onClick={() => navigate('/new-post-request')}>{currentUser.role === 1 ? 'Submit New Request' : 'New Post'}</StyledBtn>
          <StyledBtn onClick={() => navigate('/pending-post-requests')}>View Pending Request</StyledBtn>
          <StyledBtn onClick={() => navigate('/change-password')}>Change Password</StyledBtn>
          {currentUser.role === 0 && <StyledBtn onClick={() => navigate('/add-new-user')}>Add New User</StyledBtn>}
          {currentUser.role === 0 && <StyledBtn onClick={() => navigate('/manage-users')}>Manage Users</StyledBtn>}
          <LogoutBtn id="logout" onClick={handleLogOut}>
            Logout
          </LogoutBtn>
        </Container2>
      </Container>
    </>
  );
};

export default requireAuth(Dashboard);
