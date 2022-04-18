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
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: calc(100vh - 4rem - 80px - 4rem);
  margin: 40px 130px;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: calc(47% - 10px);
  margin: 5px;
  text-align: center;
  color: white;
  background-color: white;
`;

export const Wrapper1 = styled.div`
  height: 100%;
  width: calc(47% - 10px);
  margin: 5px;
  text-align: center;
  color: white;
`;

export const PostsList = styled.ul`
  color: black;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
`;

export const Post = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  font-size: 1.8rem;
  background-color: lightgrey;
  cursor: pointer;
  color: ${({ status }) => {
    switch (status) {
      case 0:
        return 'black';
        break;
      case 1:
        return 'green';
        break;
      case 2:
        return 'red';
        break;
      default:
        return 'black';
        break;
    }
  }};
`;

export const CurrentRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8%;
  background-color: white;
  color: black;
  font-size: 2.5rem;
  margin-bottom: 13px;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  margin: 13px 0;
  justify-content: center;
  width: 100%;
  height: 12%;
  background-color: white;
  color: black;
  font-size: 2.5rem;
`;

export const ImageWrapper = styled.div`
  margin-top: 13px;
  width: 100%;
  height: calc(80% - 26px);
  background-color: aliceblue;
  overflow: hidden;
  overflow-y: scroll;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: auto;
`;

export const DeleteBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2.4rem;
  background-color: white;
  color: red;
  padding: 15px 10px;
  cursor: pointer;
`;

export const PostBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2.4rem;
  background-color: white;
  color: green;
  padding: 15px 10px;
  cursor: pointer;
`;

export const DenyBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2.4rem;
  background-color: white;
  color: red;
  padding: 15px 10px;
  cursor: pointer;
  margin-bottom: 7rem;
`;
