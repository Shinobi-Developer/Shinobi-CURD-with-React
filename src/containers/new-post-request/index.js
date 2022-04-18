import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import requireAuth from 'hocs/require-auth';
import PlacholderImg from 'assets/images/placeholder.jpg';
import {
  Header,
  BackBtn,
  UserInfo,
  Title,
  Container,
  Wrapper,
  SubTitle,
  Label,
  ImageWrapper,
  UploadedImage,
  CaptionInput,
  SubmitBtn,
} from './styled';
import useAuth from 'hooks/use-auth';
import isEmpty from 'validation/is-empty';
import PostsApiService from 'services/posts-api-service';

const NewPostRequest = () => {
  const navigate = useNavigate();
  const { getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());
  const postsApiService = new PostsApiService();

  const [caption, setCaption] = useState('');
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    if (isEmpty(caption)) {
      toast.error('Please fill the caption.');
      return;
    }
    if (!file) {
      toast.error('Please select the file.');
      return;
    }
    try {
      let status = 0;
      if (currentUser.role === 0) status = 1;

      let formData = new FormData();
      formData.append('caption', caption);
      formData.append('status', status);
      formData.append('userID', currentUser.userID);
      formData.append('postImg', file);
      const res = await postsApiService.addPost(formData);
      if (res.data) {
        toast.success(`Your post is added.`);
      } else toast.warning('Something went wrong.');
    } catch (err) {
      toast.warning(err);
    }
  };
  const imgSrc = useMemo(() => (!file ? PlacholderImg : URL.createObjectURL(file)), [file]);
  return (
    <>
      <Header>
        <BackBtn onClick={() => navigate('/dashboard')}>{`< Back`}</BackBtn>
        <div className="spacer"></div>
        <UserInfo>Logged in as: {currentUser.userID}</UserInfo>
      </Header>
      <Title>{currentUser.role === 0 ? 'New Post' : 'New Post Request'}</Title>
      <Container>
        <Wrapper>
          <SubTitle>Content</SubTitle>
          <Label>
            <input name="file_upload" type="file" onChange={e => setFile(e.target.files[0])} />
            Upload Files Here
          </Label>
          <ImageWrapper>
            <UploadedImage src={imgSrc} alt="Uploaded Image" />
          </ImageWrapper>
        </Wrapper>
        <Wrapper>
          <SubTitle>Post Caption</SubTitle>
          <div>
            <CaptionInput type="text" placeholder="Input Caption Here" value={caption} onChange={e => setCaption(e.target.value)} />
          </div>
          <SubmitBtn onClick={handleSubmit}>{currentUser.role === 0 ? 'Upload' : 'Submit Request'}</SubmitBtn>
        </Wrapper>
      </Container>
    </>
  );
};

export default requireAuth(NewPostRequest);
