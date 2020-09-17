/* eslint-disable import/no-cycle */
import { AxiosResponse } from "axios";
import { postsTypes } from "../../store/posts";
import instance from "../_instance";

const posts = {
  getList(): Promise<Array<postsTypes.Post>> {
    return instance
      .get<void, AxiosResponse<Array<postsTypes.Post>>>("posts")
      .then((res) => res.data);
  },
  getPost<T, Y>(postId: T, comments: Y): Promise<postsTypes.Post> {
    return instance
      .get<void, AxiosResponse<postsTypes.Post>>(
        `posts/${postId}?_embed=${comments ? "comments" : ""}`
      )
      .then((res) => res.data);
  },
  setPost<T>(title: T, body: T): Promise<postsTypes.Post> {
    return instance
      .post<void, AxiosResponse<postsTypes.Post>>("posts", { title, body })
      .then((res) => res.data);
  },
  updatePost<T, N>(
    postId: T | N,
    { title, body }: postsTypes.Post
  ): Promise<postsTypes.Post> {
    return instance
      .put<any, AxiosResponse<postsTypes.Post>>(`posts/${postId}`, {
        title,
        body,
      })
      .then((res) => res.data);
  },
  deletePost<T>(postId: T): Promise<postsTypes.Post> {
    return instance
      .delete<any, AxiosResponse<postsTypes.Post>>(`posts/${postId}`)
      .then((res) => res.data);
  },
};

export default posts;
