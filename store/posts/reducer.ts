import { HYDRATE } from "next-redux-wrapper";
import * as types from "./types";

const initialState = {
  loading: false as boolean,
  posts: [] as Array<types.Post>,
  post: {} as types.ExtendedPost,
  error: "" as string,
  isDeleted: false,
};
export type InitialState = typeof initialState;

const reducer = (
  state: InitialState = initialState,
  action: types.Actions
): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
    default:
      return state;
  }
};
export default reducer;
