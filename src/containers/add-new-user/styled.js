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

export const SubmitBtn = styled.button`
  font-size: 1.9rem;
  width: 80%;
  margin-top: 25px;
  cursor: pointer;
`;

export const Code = styled.div`
  margin-top: 4.7rem;
  width: 20%;
  padding: 7px 0;
  background-color: white;
  color: black;
  font-size: 1.9rem;
  text-align: center;
`;
