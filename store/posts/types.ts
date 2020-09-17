export const SET_LOADING = "posts/SET_LOADING";
export const SET_FAILED = "posts/SET_FAILED";
type setFailed = {
  type: typeof SET_FAILED;
  payload: string;
};
type setLoading = {
  type: typeof SET_LOADING;
};

export const REQUEST_POSTS = "posts/REQUEST_POSTS";
export const SET_POSTS_SUCCESS = "posts/SET_POSTS_SUCCESS";
type requestPosts = {
  type: typeof REQUEST_POSTS;
};
type setPostsSuccess = {
  type: typeof SET_POSTS_SUCCESS;
  payload: Array<Post>;
};

export const REQUEST_POST = "posts/REQUEST_POST";
export const SET_POST_SUCCESS = "posts/SET_POST_SUCCESS";
export type requestPost = {
  type: typeof REQUEST_POST;
  payload: PostRequest;
};
export type setPostSuccess = {
  type: typeof SET_POST_SUCCESS;
  payload: ExtendedPost;
};

export const UPDATE_POST = "posts/UPDATE_POST";
export const UPDATE_POST_SUCCESS = "posts/UPDATE_POST_SUCCESS";
export type updatePost = {
  type: typeof UPDATE_POST;
  payload: Post;
};
export type updatePostSuccess = {
  type: typeof UPDATE_POST_SUCCESS;
  payload: Post;
};

export const CREATE_POST = "posts/CREATE_POST";
export const CREATE_POST_SUCCESS = "posts/CREATE_POST_SUCCESS";
export type createPost = {
  type: typeof CREATE_POST;
  payload: Post;
};
export type createPostSuccess = {
  type: typeof CREATE_POST_SUCCESS;
  payload: Post;
};

export const DELETE_POST = "posts/DELETE_POST";
export const DELETE_POST_SUCCESS = "posts/DELETE_POST_SUCCESS";
export type deletePost = {
  type: typeof DELETE_POST;
  payload: string | string[];
};
export type deletePostSuccess = {
  type: typeof DELETE_POST_SUCCESS;
  payload: Post;
};

export const CREATE_COMMENT = "posts/CREATE_COMMENT";
export const CREATE_COMMENT_SUCCESS = "posts/CREATE_COMMENT_SUCCESS";
export type createComment = {
  type: typeof CREATE_COMMENT;
  payload: reqComment;
};
export type createCommentSuccess = {
  type: typeof CREATE_COMMENT_SUCCESS;
  payload: resComment;
};

// data types posts
export type PostRequest = {
  postId: string | string[];
  comments: boolean;
};

export interface Post {
  id?: number | string | string[];
  title: string;
  body: string;
}
export interface ExtendedPost extends Post {
  comments?: Array<resComment>;
}

// comments
export interface reqComment {
  postId: string | string[];
  body: string;
}
export interface resComment extends reqComment {
  id: string;
}
export type Actions =
  | setFailed
  | setPostsSuccess
  | setLoading
  | requestPosts
  | setPostSuccess
  | requestPost
  | updatePost
  | updatePostSuccess
  | createPostSuccess
  | createPost
  | deletePost
  | deletePostSuccess
  | createCommentSuccess
  | createComment;
