import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import requireAuth from 'hocs/require-auth';
import {
  Header,
  BackBtn,
  UserInfo,
  Title,
  Container,
  Wrapper,
  Wrapper1,
  PostsList,
  Post,
  CurrentRequest,
  Caption,
  ImageWrapper,
  DeleteBtn,
  PostBtn,
  DenyBtn,
  UploadedImage,
} from './styled';
import PlacholderImg from 'assets/images/placeholder.jpg';
import useAuth from 'hooks/use-auth';
import PostsApiService from 'services/posts-api-service';

const PendingPostRequests = () => {
  const navigate = useNavigate();
  const { getUserHandle } = useAuth();
  const currentUser = JSON.parse(getUserHandle());
  const postsApiService = new PostsApiService();

  const [posts, setPosts] = useState([]);
  const [requestID, setRequestID] = useState('################');
  const [caption, setCaption] = useState('Post Caption Goes Here');
  const [image, setImage] = useState();

  const handleClick = post => {
    setRequestID(post._id);
    setCaption(post.caption);
    setImage(post.image);
  };

  useEffect(() => {
    (async () => {
      const res = await postsApiService.getPosts({ userID: currentUser.userID, role: currentUser.role });
      setPosts(res.data.posts);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async () => {
    if (requestID === '################') {
      toast.error('Please select the post.');
      return;
    }
    try {
      const res = await postsApiService.deletePost({ requestID });
      if (res.data) {
        toast.success(`Post is deleted.`);
        setRequestID('################');
        setCaption('Post Caption Goes Here');
        setImage();
        setPosts(posts.filter(post => post._id !== requestID));
      } else toast.warning('Something went wrong.');
    } catch (err) {
      toast.warning(err);
    }
  };

  const handleUpdate = async status => {
    if (requestID === '################') {
      toast.error('Please select the post.');
      return;
    }
    if (posts.filter(post => post._id === requestID)[0].status !== 0) {
      toast.error('Please select only pending post.');
      return;
    }
    try {
      const res = await postsApiService.updatePost({ requestID, status });
      if (res.data) {
        const res = await postsApiService.getPosts({ userID: currentUser.userID, role: currentUser.role });
        if (status === 1) toast.success(`Post is posted.`);
        else toast.success(`Post is denied.`);
        setPosts(res.data.posts);
      } else toast.warning('Something went wrong.');
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
      <Title>Pending Post Requests</Title>

      <Container>
        <Wrapper>
          <PostsList>
            {posts.map((post, index) => {
              return (
                <Post key={index} status={post.status} onClick={() => handleClick(post)}>
                  Request ID: {post._id}
                </Post>
              );
            })}
          </PostsList>
        </Wrapper>
        <Wrapper1>
          <CurrentRequest>Request ID: {requestID}</CurrentRequest>
          <Caption>{caption}</Caption>
          <ImageWrapper>
            <UploadedImage src={image ? 'http://localhost:5000' + image : PlacholderImg} alt="Uploaded Image" />
          </ImageWrapper>
        </Wrapper1>
        {currentUser.role === 1 ? (
          <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
        ) : (
          <>
            <DenyBtn onClick={() => handleUpdate(2)}>Deny</DenyBtn>
            <PostBtn onClick={() => handleUpdate(1)}>Post</PostBtn>
          </>
        )}
      </Container>
    </>
  );
};

export default requireAuth(PendingPostRequests);
