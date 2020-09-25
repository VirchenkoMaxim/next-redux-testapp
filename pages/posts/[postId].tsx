import { useRouter } from "next/dist/client/router";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "lodash";
import Link from "next/link";
import styled from "styled-components";
import { END } from "redux-saga";
import { postsActions, postsSelectors } from "../../store/posts";
import MainLayout from "../../components/MainLayot";
import PostForm from "../../components/PostForm";
import CommentsForm, { InitialValues } from "../../components/CommentsForm";
import { SagaStore, wrapper } from "../../store";
import Preloader from "../../components/Preloader";

const Title = styled.h1`
  text-align: center;
`;
const A = styled.a`
  color: black;
  &:hover {
    margin-left: 8px;
    cursor: pointer;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div > input {
    margin-left: 10px;
  }
`;
const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 40px 0;
  & > input {
    align-self: center;
  }
  & > h3 {
    align-self: center;
  }
  & > form {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const DeletedContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Post: FC = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => postsSelectors.getPost(state));
  const error = useSelector((state) => postsSelectors.getErrorMessage(state));
  const loading = useSelector((state) => postsSelectors.getLoading(state));
  const isDeleted = useSelector((state) => postsSelectors.isDeleted(state));
  const router = useRouter();
  const { postId } = router.query;
  const [comments, setComments] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [commentVal] = useState({ body: "" });

  useEffect(() => {
    if (postId) {
      dispatch(postsActions.requestPost(postId, comments));
    }
  }, [postId, comments]);

  const editModeToogle = (): void => {
    setEditMode(!editMode);
  };
  const SubmitForm = (val) => {
    dispatch(postsActions.postUpdate(postId, val.title, val.body));
    dispatch(postsActions.requestPost(postId, comments));
    setEditMode(false);
  };
  const deletePost = () => {
    dispatch(postsActions.deletePost(postId));
  };
  const createComment = (values: InitialValues): void => {
    const { body } = values;
    dispatch(postsActions.createComment({ postId, body }));
  };

  if (loading) {
    <Preloader />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <MainLayout title="Post | Comments">
      {isDeleted ? (
        <DeletedContainer>
          <h4>
            Post Was Deleted |
            <Link href="/">
              <A>Home</A>
            </Link>
          </h4>
        </DeletedContainer>
      ) : (
        <div>
          <section>
            {editMode ? (
              <PostForm
                values={{ title: post.title, body: post.body }}
                setSubmiting={SubmitForm}
              />
            ) : (
              <>
                <Section>
                  <h3>Post {post.id}</h3>
                  <div>
                    <input
                      type="button"
                      onClick={editModeToogle}
                      value="Edit Post"
                    />
                    <input
                      type="button"
                      onClick={deletePost}
                      value="Delete Post"
                    />
                  </div>
                </Section>

                <Title>{post.title}</Title>
                <p>{post.body}</p>
              </>
            )}
          </section>
          <CommentsSection>
            {comments && (
              <>
                <h3>Commentaries</h3>
                <ul>
                  {post.comments &&
                    _.map(post.comments, (item, index) => (
                      <li key={index}>{item.body}</li>
                    ))}
                </ul>
                <CommentsForm onSubmit={createComment} values={commentVal} />
              </>
            )}
            <input
              type="button"
              onClick={() => setComments(!comments)}
              value={comments ? "Hide Comments" : "Show Comments"}
            />
          </CommentsSection>
        </div>
      )}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { userId } = query;
    store.dispatch(postsActions.requestPost(userId, false));
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();
  }
);
export default Post;
