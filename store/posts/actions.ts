import * as types from "./types";

export const setLoading = (): types.Actions => ({
  type: types.SET_LOADING,
});
export const setFailed = (payload: string): types.Actions => ({
  type: types.SET_FAILED,
  payload,
});

export const requestPosts = (): types.Actions => ({
  type: types.REQUEST_POSTS,
});
export const setPostsSuccess = (payload: Array<types.Post>): types.Actions => ({
  type: types.SET_POSTS_SUCCESS,
  payload,
});

export const postUpdate = (
  id: string | string[],
  title: string,
  body: string
): types.Actions => ({
  type: types.UPDATE_POST,
  payload: { id, title, body },
});
export const postUpdateSuccess = (payload: types.Post): types.Actions => ({
  type: types.UPDATE_POST_SUCCESS,
  payload,
});

export const requestPost = (
  postId: string | string[],
  comments: boolean
): types.Actions => ({
  type: types.REQUEST_POST,
  payload: { postId, comments },
});
export const setPostSuccess = (payload: types.ExtendedPost): types.Actions => ({
  type: types.SET_POST_SUCCESS,
  payload,
});

export const createPost = ({ title, body }: types.Post): types.Actions => ({
  type: types.CREATE_POST,
  payload: { title, body },
});
export const createPostSuccess = (payload: types.Post): types.Actions => ({
  type: types.CREATE_POST_SUCCESS,
  payload,
});

export const deletePost = (payload: string | string[]): types.Actions => ({
  type: types.DELETE_POST,
  payload,
});
export const deletePostSuccess = (payload: types.Post): types.Actions => ({
  type: types.DELETE_POST_SUCCESS,
  payload,
});

export const createComment = ({
  postId,
  body,
}: types.reqComment): types.Actions => ({
  type: types.CREATE_COMMENT,
  payload: { postId, body },
});
export const createCommentSuccess = (
  payload: types.resComment
): types.Actions => ({
  type: types.CREATE_COMMENT_SUCCESS,
  payload,
});
