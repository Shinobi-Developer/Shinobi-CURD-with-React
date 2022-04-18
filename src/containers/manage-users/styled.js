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
  .scroll-table {
    width: 1200px;
  }
  .scroll-table-body {
    height: 500px;
    overflow-x: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    background: white;
    width: 100%;
  }
  .scroll-table table {
    background: white;
    table-layout: fixed;
    border: none;
    width: 100%;
    border-collapse: collapse;
  }
  .scroll-table thead th {
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 10px 15px;
    background: #f9a34b;
    font-family: sans-serif !important;
    font-size: 20px;
    color: white;
  }
  .scroll-table tbody td {
    text-align: left;
    border: 1px solid #ddd;
    padding: 10px 15px;
    font-family: sans-serif !important;
    font-size: 18px;
    vertical-align: center;

    .status-green {
      width: 20px;
      height: 20px;
      background: green;
      border-radius: 50%;
      margin: auto;
    }

    .status-red {
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      margin: auto;
    }

    button {
      background-color: red; /* Green */
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      transition-duration: 0.4s;
      cursor: pointer;
      color: white;
      font-size: 18px;
      font-family: sans-serif !important;
      :hover {
        background-color: white; /* Green */
        color: red;
      }
    }
  }
  .scroll-table tbody tr:nth-child(even) {
    background: #f3f3f3;
  }

  /* Scroll styles */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
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
