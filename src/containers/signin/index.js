import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Title,
  Container,
  LoginWrapper,
  FormTitle,
  Label,
  LoginForm,
  Field,
  Input,
  Error,
  LoginButton,
  LoginButtonOut,
  Divider,
  RegisterWrapper,
  CreateAccountButton,
} from './styled';
import isEmpty from 'validation/is-empty';
import AuthApiService from 'services/auth-api-service';
import useAuth from 'hooks/use-auth';

const SignIn = () => {
  const authApiService = new AuthApiService();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    if (isEmpty(userID)) {
      toast.error('Please fill the User ID.');
      return;
    }
    if (isEmpty(password)) {
      toast.error('Please fill the Password.');
      return;
    }
    try {
      const res = await authApiService.signIn({
        userID,
        password,
      });
      if (res.data) {
        toast.success('Signed in successfully.');
        login({ api_token: res.data.token, handle: JSON.stringify(res.data.user) });
        navigate('/dashboard');
      } else {
        toast.warning('Something went wrong.');
      }
    } catch (err) {
      toast.warning(err);
    }
  };

  useEffect(() => {
    (async () => {
      await authApiService.createAdmin();
    })();
  }, []);

  return (
    <>
      <Title>Instagram Post Management Website</Title>
      <Container>
        <LoginWrapper>
          <FormTitle>Login</FormTitle>
          <LoginForm>
            <Field>
              <Label>Username</Label>
              <div className="spacer"></div>
              <Input name="username" type="text" onChange={e => setUserID(e.target.value)} />
            </Field>
            <Field>
              <Label>Password</Label>
              <div className="spacer"></div>
              <Input name="password" type="password" onChange={e => setPassword(e.target.value)} />
            </Field>
            {/* <Error>* Incorrect Login</Error> */}
            <LoginButtonOut>
              <LoginButton type="button" onClick={handleClick}>
                Login
              </LoginButton>
            </LoginButtonOut>
          </LoginForm>
        </LoginWrapper>
        <Divider />
        <RegisterWrapper>
          <FormTitle>New User</FormTitle>
          <CreateAccountButton onClick={() => navigate('/signup')}>Create Account</CreateAccountButton>
        </RegisterWrapper>
      </Container>
    </>
  );
};

export default SignIn;
