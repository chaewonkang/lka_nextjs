import React from 'react';
import Head from 'next/head';
import '../static/css/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='../static/images/symbol_blue.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Urbanist:wght@500;600&display=swap'
          rel='stylesheet'
        ></link>
        <title>BUSINESS CHANNEL Ltd.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
