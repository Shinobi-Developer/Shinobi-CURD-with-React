import HttpApiService from './http-api-service';

class PostsApiService extends HttpApiService {
  constructor() {
    super();
  }

  addPost = formData => {
    return this.create('/posts/add-post', formData);
  };

  getPosts = userData => {
    return this.post('/posts/get-posts', userData);
  };

  deletePost = postData => {
    return this.post('/posts/delete-post', postData);
  };

  updatePost = postData => {
    return this.post('/posts/update-post', postData);
  };
}

export default PostsApiService;
