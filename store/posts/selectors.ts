import * as _ from "lodash";
import * as types from "./types";

export const getLoading = (state): boolean => state.loading;
export const getErrorMessage = (state): string => state.error;

export const getPosts = (state): Array<types.Post> =>
  _.clone(state.posts).reverse();

export const getPost = (state): types.ExtendedPost => state.post;

export const isDeleted = (state): boolean => state.isDeleted;
