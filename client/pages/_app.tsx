import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Poppins, Roboto } from '@next/font/google';
import cx from 'classnames';
import { SWRConfig } from 'swr';
import fetchJson from '@/utils/fetchJson';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
