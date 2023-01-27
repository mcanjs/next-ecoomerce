import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Poppins, Roboto } from '@next/font/google';
import cx from 'classnames';
import { SWRConfig } from 'swr';
import fetchJson from '@/utils/fetchJson';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '500', '700']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '300', '500', '700']
});

const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SWRConfig
          value={{
            fetcher: fetchJson,
            onError: err => {
              console.error(err);
            }
          }}
        >
          <main className={cx(roboto.variable, poppins.variable)}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}
