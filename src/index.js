import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/containers/app/App.jsx';
import configStore from './js/actions/store';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = configStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);