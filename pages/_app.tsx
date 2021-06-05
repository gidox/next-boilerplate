import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import store from '../store';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
