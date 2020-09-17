import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { mainColor, textColor } from "../styles/constants";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 0 10%;
  background-color: ${mainColor};
  display: flex;
  justify-content: space-between;
  color: white;
`;
const Title = styled.h1`
  align-self: center;
`;
const Nav = styled.nav`
  align-self: center;
`;
const Item = styled.li`
  margin-left: 20px;
  list-style: none;
`;
const Ul = styled.ul`
  display: flex;
`;
const A = styled.a`
  font-size: 23px;
  cursor: pointer;
  color: ${textColor};
  text-decoration: none;
  &:hover {
    color: #9c9494;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Title>TestApp</Title>
      <Nav>
        <Ul>
          <Item>
            <Link href="/">
              <A>Home</A>
            </Link>
          </Item>
          <Item>
            <Link href="/posts/new">
              <A>Create Post</A>
            </Link>
          </Item>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
