import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Header, BackBtn, Title, Container, Form, Field, Label, Input, Error, CreateAccBtnOut, CreateAccBtn } from './styled';
import isEmpty from 'validation/is-empty';
import AuthApiService from 'services/auth-api-service';

const SignUp = () => {
  const authApiService = new AuthApiService();
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleClick = async () => {
    if (isEmpty(code)) {
      toast.error('Please fill the code.');
      return;
    }
    if (isEmpty(userID)) {
      toast.error('Please fill the User ID.');
      return;
    }
    if (isEmpty(password)) {
      toast.error('Please fill the Password.');
      return;
    }
    if (isEmpty(repassword) || password !== repassword) {
      toast.error('Please confirm the Password.');
      return;
    }
    try {
      const res = await authApiService.createAccount({
        code,
        userID,
        password,
      });
      if (res.data) {
        toast.success('Created the account successfully.');
        navigate('/signin');
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
        <BackBtn onClick={() => navigate('/signin')}>{`< Back`}</BackBtn>
      </Header>
      <Title>New Account Setup</Title>
      <Container>
        <Form>
          <Field>
            <Label>Admin Code</Label>
            <div className="spacer"></div>
            <Input type="text" onChange={e => setCode(e.target.value)} />
          </Field>
          <Field>
            <Label>User ID</Label>
            <div className="spacer"></div>
            <Input type="text" onChange={e => setUserID(e.target.value)} />
          </Field>
          <Field>
            <Label>Password</Label>
            <div className="spacer"></div>
            <Input type="password" onChange={e => setPassword(e.target.value)} />
          </Field>
          <Field>
            <Label>Re-Enter Password</Label>
            <div className="spacer"></div>
            <Input type="password" onChange={e => setRepassword(e.target.value)} />
          </Field>
          {/* <Error>* Incorrect Admin Code</Error> */}
          <CreateAccBtnOut>
            <CreateAccBtn type="button" onClick={handleClick}>
              Create Account
            </CreateAccBtn>
          </CreateAccBtnOut>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
