import React, { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  title?: string;
};
const Main = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
`;
const App = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const MainLayout: FC<Props> = ({ title = "MyApp", children }) => (
  <App>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </App>
);

export default MainLayout;
