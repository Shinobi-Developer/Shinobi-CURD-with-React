import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import requireAuth from 'hocs/require-auth';
import { Header, BackBtn, UserInfo, Container, Title, Form, Field, Label, SubmitBtn, Code } from './styled';
import AuthApiService from 'services/auth-api-service';
import useAuth from 'hooks/use-auth';
import isEmpty from 'validation/is-empty';

const AddNewUser = () => {
  const authApiService = new AuthApiService();
  const navigate = useNavigate();
  const { getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('XXXXXXXXXX');

  const handleClick = async () => {
    if (isEmpty(firstName)) {
      toast.error('Please fill your First Name.');
      return;
    }
    if (isEmpty(lastName)) {
      toast.error('Please fill your Last Name.');
      return;
    }
    try {
      const res = await authApiService.addUser({
        firstName,
        lastName,
      });
      if (res.data) {
        toast.success(`${firstName} ${lastName} is added.`);
        setCode(res.data.code);
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
        <Title>Add New User</Title>
        <Form>
          <Field>
            <Label>First Name</Label>
            <div className="spacer"></div>
            <input name="first_name" type="text" onChange={e => setFirstName(e.target.value)} />
          </Field>
          <Field>
            <Label>Last Name</Label>
            <div className="spacer"></div>
            <input name="last_name" type="text" onChange={e => setLastName(e.target.value)} />
          </Field>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SubmitBtn type="button" onClick={handleClick}>
              Generate Code
            </SubmitBtn>
          </div>
        </Form>
        <div style={{ height: 0, width: '100%' }}></div>
        <Code>{code}</Code>
      </Container>
    </>
  );
};

export default requireAuth(AddNewUser);
