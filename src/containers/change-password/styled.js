import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const BackBtn = styled.div`
  padding: 8px 20px;
  background-color: white;
  font-size: 2rem;
  margin: 10px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  color: white;
  font-size: 2rem;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  text-align: center;
  width: 100%;
  font-size: 4rem;
  margin: 5rem 0;
  color: white;
`;

export const Label = styled.label`
  color: white;
  font-size: 1.9rem;
`;

export const Form = styled.div`
  display: flex;
  width: 35rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Field = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 6px 0;
  height: 50px;
  align-items: center;

  input {
    width: 60%;
    height: 90%;
  }
`;

export const Error = styled.div`
  color: white;
  margin: 25px 0;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
`;

export const ChangePasswordBtn = styled.button`
  font-size: 1.9rem;
  width: 70%;
  margin-top: 20px;
  cursor: pointer;
`;

export const ChangePasswordBtnOut = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
