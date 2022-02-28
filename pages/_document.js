import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import Helmet from "react-helmet";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	   html,
	   body {
		  	width: 100%;
			height: 100%;
			overflow-x: hidden;
			margin: 0;
			position: relative;
		  }

		  #__next {
			  width: calc(100% - 60px);
			  height: calc(100% - 60px);
			  margin: 0;
			  top: 0;
		  }
`;

class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
        const page = context.renderPage(
            App => props =>
                sheet.collectStyles(
                    <>
                        <GlobalStyles />
                        <App {...props} />
                    </>,
                ),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, helmet: Helmet.renderStatic(), styleTags };
    }
    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet; // helmet으로 부터 받아온다.
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return (
            <Html {...htmlAttrs}>
                <Head>
                    {this.props.styleTags}
                    {Object.values(helmet).map((el, key) => el.toComponent())}
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                </Head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
