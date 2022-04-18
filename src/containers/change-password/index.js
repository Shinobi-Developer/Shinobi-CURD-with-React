import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import requireAuth from 'hocs/require-auth';
import { Header, BackBtn, UserInfo, Container, Title, Field, Form, Label, Error, ChangePasswordBtn, ChangePasswordBtnOut } from './styled';
import isEmpty from 'validation/is-empty';
import AuthApiService from 'services/auth-api-service';
import useAuth from 'hooks/use-auth';

const ChangePassword = () => {
  const authApiService = new AuthApiService();
  const navigate = useNavigate();
  const { getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleClick = async () => {
    if (isEmpty(currentPassword)) {
      toast.error('Please fill the current password.');
      return;
    }
    if (isEmpty(newPassword)) {
      toast.error('Please fill the new password.');
      return;
    }
    if (newPassword !== repassword) {
      toast.error('Please confirm the new password.');
      return;
    }
    try {
      const res = await authApiService.changePassword({
        userID: currentUser.userID,
        currentPassword,
        newPassword,
      });
      if (res.data) {
        toast.success(`Password changed to '${newPassword}'.`);
      } else {
        toast.warning('Something went wrong.');
      }
    } catch (err) {
      toast.warning(err);
    }
  };

  return (
    <>
      <Header>
        <BackBtn onClick={() => navigate('/dashboard')}>{`< Back`}</BackBtn>
        <div className="spacer"></div>
        <UserInfo>Logged in as: {currentUser.userID}</UserInfo>
      </Header>
      <Container>
        <Title>Change Password</Title>
        <Form>
          <Field>
            <Label>Current Password</Label>
            <div className="spacer"></div>
            <input name="curr_pass" type="password" onChange={e => setCurrentPassword(e.target.value)} />
          </Field>
          <Field>
            <Label>New Password</Label>
            <div className="spacer"></div>
            <input name="new_pass" type="password" onChange={e => setNewPassword(e.target.value)} />
          </Field>
          <Field>
            <Label>Re-enter New Password</Label>
            <div className="spacer"></div>
            <input name="new_pass2" type="password" onChange={e => setRepassword(e.target.value)} />
          </Field>
          {/* <Error>* Incorrect Current Password</Error> */}
          <ChangePasswordBtnOut>
            <ChangePasswordBtn type="button" onClick={handleClick}>
              Change Password
            </ChangePasswordBtn>
          </ChangePasswordBtnOut>
        </Form>
      </Container>
    </>
  );
};

export default requireAuth(ChangePassword);
