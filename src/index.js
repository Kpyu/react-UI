import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root, { App } from './containers';
// import todoApp from './reducers'
    // <Root store={store} history ={browserHistory} />,

const store = configureStore();

const rootElement = document.getElementById('root');
render(
//    <Root store={store} />,
  <App  store={store}/> ,   
  rootElement
);
