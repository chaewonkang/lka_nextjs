import React from 'react';
import Head from 'next/head';
import '../static/css/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='../static/images/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>주식회사 비즈니스채널</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
