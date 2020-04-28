import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'react-redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('app')
);
