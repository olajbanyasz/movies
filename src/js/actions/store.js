import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;