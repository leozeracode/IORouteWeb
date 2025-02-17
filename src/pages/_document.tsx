import * as React from 'react'
import Document, { type DocumentContext, Html, Head, Main, NextScript, type DocumentInitialProps } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }

  render (): JSX.Element {
    return (
      <Html lang='pt_BR'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='cache-control' content='no-cache' />
          <meta httpEquiv='expires' content='0' />
          <meta httpEquiv='pragma' content='no-cache' />
          <link rel='stylesheet' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
