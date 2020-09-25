import { HYDRATE } from "next-redux-wrapper";
import * as types from "./types";

const initialState = {
  loading: false,
  posts: [],
  post: {},
  error: "",
  isDeleted: false,
};
// export type InitialState = typeof initialState;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.SET_POSTS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        posts: [...action.payload],
      };
    case types.SET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        post: action.payload,
      };
    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        post: action.payload,
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        post: action.payload,
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        post: action.payload,
        isDeleted: true,
      };
    case types.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        error: "",
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
        loading: false,
      };
    case types.SET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
