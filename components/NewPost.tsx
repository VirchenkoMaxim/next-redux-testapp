import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { SagaStore, wrapper } from "../store";
import { postsActions, postsSelectors, postsTypes } from "../store/posts";
import PostForm from "./PostForm";
import Preloader from "./Preloader";

const NewPost: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values] = useState({ title: "", body: "" });
  const post = useSelector((state) => postsSelectors.getPost(state));
  const error = useSelector((state) => postsSelectors.getErrorMessage(state));
  const loading = useSelector((state) => postsSelectors.getLoading(state));

  const createPost = (val: postsTypes.Post): void => {
    dispatch(postsActions.createPost(val));
    router.push("/");
  };

  if (loading) {
    return <Preloader />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PostForm setSubmiting={createPost} values={values} />
    </>
  );
};

export default NewPost;
