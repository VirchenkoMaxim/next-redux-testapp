import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
// eslint-disable-next-line import/no-cycle
import { commentsAPI, postsAPI } from "../../api";
import * as actions from "./actions";
import * as types from "./types";

export function* getPosts(): Generator<
  PutEffect<types.Actions> | CallEffect<types.Post[]>,
  void,
  Array<types.Post>
> {
  yield put(actions.setLoading());
  try {
    const data = yield call(postsAPI.getList);
    yield put(actions.setPostsSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}

export function* getPost(
  action: types.requestPost
): Generator<
  CallEffect<types.Post> | PutEffect<types.Actions>,
  void,
  types.ExtendedPost
> {
  yield put(actions.setLoading());
  try {
    const { postId, comments } = action.payload;
    const data = yield call(postsAPI.getPost, postId, comments);
    yield put(actions.setPostSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}

export function* updatePost(
  action: types.updatePost
): Generator<PutEffect<types.Actions> | CallEffect<any>, void, types.Post> {
  yield put(actions.setLoading());
  try {
    const { title, body, id } = action.payload;
    const data = yield call(postsAPI.updatePost, id, { title, body });
    yield put(actions.postUpdateSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}

export function* createPost(
  action: types.createPost
): Generator<PutEffect<types.Actions> | CallEffect<any>, void, types.Post> {
  yield put(actions.setLoading());
  try {
    const { title, body } = action.payload;
    const data = yield call(postsAPI.setPost, title, body);
    yield put(actions.createPostSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}

export function* deletePost(
  action: types.deletePost
): Generator<PutEffect<types.Actions> | CallEffect<any>, void, types.Post> {
  yield put(actions.setLoading());
  try {
    const { payload } = action;
    const data = yield call(postsAPI.deletePost, payload);
    yield put(actions.deletePostSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}
export function* createComment(
  action: types.createComment
): Generator<
  PutEffect<types.Actions> | CallEffect<any>,
  void,
  types.resComment
> {
  yield put(actions.setLoading());
  try {
    const { postId, body } = action.payload;
    const data = yield call(commentsAPI.createComment, postId, body);
    yield put(actions.createCommentSuccess(data));
  } catch (error) {
    yield put(actions.setFailed(error.message));
  }
}

export function* postsWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(types.REQUEST_POST, getPost);
  yield takeEvery(types.REQUEST_POSTS, getPosts);
  yield takeEvery(types.UPDATE_POST, updatePost);
  yield takeEvery(types.CREATE_POST, createPost);
  yield takeEvery(types.DELETE_POST, deletePost);
  yield takeEvery(types.CREATE_COMMENT, createComment);
}
