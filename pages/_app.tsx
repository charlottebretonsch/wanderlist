import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import React from "react";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #F4F4F4;
    font-family: 'Hind', sans-serif;
    margin: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
