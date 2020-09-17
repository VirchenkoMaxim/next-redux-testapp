import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { mainColor, textColor } from "../styles/constants";

const FooterContainer = styled.footer`
  grid-row-start: 3;
  grid-row-end: 4;
  width: 100%;
  height: 100px;
  padding: 0 10%;
  background-color: ${mainColor};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const CopyRight = styled.div`
  color: ${textColor};
  font-size: 19px;
  align-self: center;
`;
const A = styled.a`
  text-decoration: none;
  color: ${textColor};
  font-size: 21px;
  align-self: center;
  cursor: pointer;
  &:hover {
    color: #9c9494;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <CopyRight>Test App © 2020</CopyRight>
      <Link href="/">
        <A> Go Home</A>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
