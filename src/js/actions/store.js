import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from 'window-or-global';

const preloadedState = root.__INITIAL_DATA__;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const loggerMiddleware = createLogger();

export default () => {
  const store = createStore(persistedReducer, preloadedState, applyMiddleware(thunk, loggerMiddleware));
  const persistor = persistStore(store)
  return { store, persistor }
}