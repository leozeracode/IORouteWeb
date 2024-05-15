import React from 'react'

import { type AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

import '../styles/sass/styles.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ptBR} theme={{
        token: {
          colorPrimary: '#FF7100'
        },
        components: {
          Input: {
            hoverBg: '#F5F5F5',
            hoverBorderColor: '#B9B9B9',
            activeBorderColor: '#B9B9B9',
            colorTextPlaceholder: '#4E4E4E',
            colorBorder: '#B9B9B9'
          }
        }

      }}>
        <Component {...pageProps} />
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
