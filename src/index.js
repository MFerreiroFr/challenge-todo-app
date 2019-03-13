import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {createGlobalStyle} from 'styled-components';

import App from './components/App';
import reducers from './reducers';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
}
body{
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
}
`
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><GlobalStyle /><App /></Provider>,
  document.querySelector('#root'));