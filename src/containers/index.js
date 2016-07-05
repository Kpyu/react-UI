import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Devtools from './devtools';
// import ceateRoutes from '../routes';
export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    // let routes = ceateRoutes(store);
    return (
      <Provider store={store}>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Devtools/>
        </div>
        
      </Provider>
    );
  }
}