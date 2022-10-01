import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CookiesProvider } from 'react-cookie';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading</p>}>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ReactQueryDevtools initialIsOpen={true} />
            <App />
          </RecoilRoot>
        </QueryClientProvider>
      </CookiesProvider>
    </Suspense>
  </React.StrictMode>,
);
