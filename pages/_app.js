import Head from 'next/head';
import { Provider } from 'react-redux';

import '../styles/globals.scss';
import store from '../store/store';
 
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" type="image/svg" href="/static/images/twitter-logo.svg"/>
        <title>TEA</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp