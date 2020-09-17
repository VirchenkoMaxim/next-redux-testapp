import React, { FC } from "react";
import * as _ from "lodash";
import Link from "next/link";
import styled from "styled-components";
import { postsTypes } from "../store/posts";
import { mainColor } from "../styles/constants";

interface Props {
  posts: Array<postsTypes.Post>;
}
const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
  &:hover {
    text-decoration: none;
    color: ${mainColor};
  }
`;
const List = styled.div`
  display: grid;
  margin: 1em 0;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 1em;
`;
const ListItem = styled.div`
  height: 200px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const Title = styled.h2`
  overflow: hidden;
  text-align: center;
  margin: 10px 0 0 0;
  line-height: 30px;
  display: flex;
  justify-content: center;
`;
const Text = styled.p`
  margin: 20px 0 0 0;
  height: calc(100% - 23px);
  overflow: hidden;
  word-wrap: break-word;
`;

const PostsList: FC<Props> = ({ posts }) => {
  const usersList = _.map(posts, (item: postsTypes.Post, index) => (
    <ListItem key={index}>
      <Link href={`posts/${item.id}`}>
        <Title>
          <A>{item.title}</A>
        </Title>
      </Link>
      <Text>{item.body}</Text>
    </ListItem>
  ));
  return <List>{usersList}</List>;
};

export default PostsList;
