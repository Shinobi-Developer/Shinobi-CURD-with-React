import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
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

export const Title = styled.div`
  text-align: center;
  width: 100%;
  height: 4rem;
  font-size: 4rem;
  color: white;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  height: calc(100vh - 4rem - 80px - 4rem);
  margin: 40px 150px;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(50% - 10px);
  margin: 5px;
  text-align: center;
  color: white;
`;

export const SubTitle = styled.div`
  font-size: 3.5rem;
  height: 3.5rem;
  margin: 0 0 10px 0;
`;

export const Label = styled.label`
  color: white;
  font-size: 1.9rem;
  justify-content: center;
  background-color: white;
  color: black;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 6px 0;
  height: 50px;
  align-items: center;

  input {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 72px - 3.5rem);
  font-family: Arial, sans-serif;
  background-color: aliceblue;
  overflow: hidden;
  overflow-y: scroll;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SubmitBtn = styled.div`
  width: 100%;
  position: absolute;
  margin: 8px 0;
  bottom: 0;
  text-align: center;
  font-size: 2.4rem;
  background-color: white;
  color: black;
  padding: 10px 0;
  cursor: pointer;
`;

export const CaptionInput = styled.input`
  width: 100%;
  height: 10rem;
  color: black;
  text-align: center;
  font-size: 2.5rem;
  padding: 0;
  border: none;

  ::placeholder {
    font-family: Liebe;
    color: black;
    text-align: center;
    font-size: 2.5rem;
  }
`;
