import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const loggerMiddleware = createLogger();

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, loggerMiddleware));
  const persistor = persistStore(store)
  return { store, persistor }
}