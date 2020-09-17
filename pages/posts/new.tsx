import React, { FC } from "react";
import MainLayout from "../../components/MainLayot";
import NewPost from "../../components/NewPost";

const New: FC = () => {
  return (
    <MainLayout title="Create post | New post">
      <NewPost />
    </MainLayout>
  );
};

export default New;
