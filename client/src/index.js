import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

/** components */
import App from './App/App';

/** global styles */
import './index.css';

/** store */
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
