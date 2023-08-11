import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux/es/exports';
import { Store } from './config/redux/store/store.tsx';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persiststore = persistStore(Store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persiststore}>
        <App />
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
