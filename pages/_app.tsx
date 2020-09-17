import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../store";
import "../styles/global.css";

const theme = {};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default wrapper.withRedux(MyApp);
