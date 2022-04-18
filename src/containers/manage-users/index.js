import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import requireAuth from 'hocs/require-auth';
import { Header, BackBtn, UserInfo, Container, Title } from './styled';
import isEmpty from 'validation/is-empty';
import AuthApiService from 'services/auth-api-service';
import useAuth from 'hooks/use-auth';

const ManageUsers = () => {
  const navigate = useNavigate();
  const authApiService = new AuthApiService();
  const { getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());

  const [users, setUsers] = useState([]);

  const handleDelete = async _id => {
    try {
      const res = await authApiService.deleteUser({ _id });
      console.log(res);
      if (res.data) {
        setUsers(users.filter(user => user._id !== _id));
        toast.success('One user is deleted');
      } else {
        toast.warning('Something went wrong.');
      }
    } catch (err) {
      toast.warning(err);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await authApiService.getAllUsers();
      setUsers(res.data.allUsers.filter(user => user.role !== 0));
    })();
  }, []);

  return (
    <>
      <Header>
        <BackBtn onClick={() => navigate('/dashboard')}>{`< Back`}</BackBtn>
        <div className="spacer"></div>
        <UserInfo>Logged in as: {currentUser.userID}</UserInfo>
      </Header>
      <Container>
        <Title>Manage Users</Title>
        <div class="scroll-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Code</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>UserName</th>
                <th>Delete User</th>
              </tr>
            </thead>
          </table>
          <div class="scroll-table-body">
            <table>
              <tbody>
                {users.map((user, index) => {
                  if (user.role !== 0)
                    return (
                      <tr key={index}>
                        <td style={{ textAlign: 'center' }}>{index + 1}</td>
                        <td>{!isEmpty(user.userID) ? <div className="status-green" /> : <div className="status-red" />}</td>
                        <td>{isEmpty(user.userID) ? user.code : ''}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.userID}</td>
                        <td>
                          <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default requireAuth(ManageUsers);
