import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { Lato } from '@next/font/google';
import cx from 'classnames';
import { SWRConfig } from 'swr';
import fetchJson from '@/utils/fetchJson';

const lato = Lato({
  subsets: ['latin-ext'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700']
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
      <main className={cx(lato.className, 'h-full')}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SWRConfig>
  );
}
