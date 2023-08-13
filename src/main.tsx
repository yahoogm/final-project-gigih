import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux/es/exports';
import { Store } from './config/redux/store/store.tsx';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persiststore = persistStore(Store);
const theme = extendTheme({
  fonts: {
    body: 'Menlo, monospace',
    heading: 'Menlo, monospace',
    mono: 'Menlo, monospace',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persiststore}>
        <App />
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
