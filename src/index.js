import 'babel-polyfill'
import React from 'react'
import { browserHistory } from 'react-router';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Root from './containers'
// import todoApp from './reducers'
    // <Root store={store} history ={browserHistory} />,

const store = configureStore();

const rootElement = document.getElementById('root')

render(
   <Root store={store} />,
  rootElement
)
