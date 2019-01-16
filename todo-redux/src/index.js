import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import state from './reducers';
import { ListApp } from './components'

const store = createStore(state);

ReactDOM.render(
  <Provider store={store}>
    <ListApp />
  </Provider>, 
  document.getElementById('root')
);

