import React from "react";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { END } from "redux-saga";
import { postsActions, postsSelectors } from "../store/posts";
import { SagaStore, wrapper } from "../store";
import MainLayout from "../components/MainLayot";
import PostsList from "../components/PostsList";

const Page: NextPage = () => {
  const posts = useSelector((state) => postsSelectors.getPosts(state));
  return (
    <MainLayout title="Test App | My App">
      <PostsList posts={posts} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(postsActions.requestPosts());
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();
  }
);

export default Page;
