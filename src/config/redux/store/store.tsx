import storage from 'redux-persist/lib/storage';
import { Reducers } from '../reducers/reducers';
import { persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const persistConfig = { key: 'root', storage, whitelist: ['videos'] };

const persistatedReducers = persistReducer(persistConfig, Reducers);

const Store = configureStore({
  reducer: persistatedReducers,
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { Store };
