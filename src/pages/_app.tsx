import MainLayout from '@/components/layout/main-layout';
import type { AppProps } from 'next/app';
// import { createStore, applyMiddleware } from 'redux';

// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
// import reducer from '../stores/reducers';

// const middleware = [thunk]

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

// import { store } from '../stores/store/configureStore';
// import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  return  <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
}
